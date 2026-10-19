import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Enter a valid email address");
const optionalUrlSchema = z
  .string()
  .trim()
  .refine(
    (value) => !value || z.url().safeParse(value).success,
    "Enter a valid URL",
  );

const forgotPasswordSchema = z.object({ email: emailSchema });
const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const profileSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  bio: z.string().max(500, "About section must be 500 characters or fewer"),
  portfolio: optionalUrlSchema,
  goal: z.string().max(300, "Learning goal must be 300 characters or fewer"),
});
const mentorApplicationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  specialty: z.string().trim().min(2, "Enter an area of expertise"),
  experience: z
    .number({ error: "Enter years of experience" })
    .int("Enter a whole number")
    .min(0, "Experience cannot be negative")
    .max(80, "Enter a valid number of years"),
  availability: z.enum(["Part-time", "Full-time", "Flexible"], {
    error: "Select your availability",
  }),
  bio: z.string().trim().min(20, "Please enter at least 20 characters"),
});
const organizationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Organization name must be at least 2 characters"),
  contact: z
    .string()
    .trim()
    .min(2, "Contact name must be at least 2 characters"),
  email: emailSchema,
  website: optionalUrlSchema,
  size: z.enum(["1–10", "11–50", "51–200", "201+"], {
    error: "Select your team size",
  }),
  interest: z.string().trim().min(20, "Please enter at least 20 characters"),
});
const adminUserSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: emailSchema,
  role: z.enum(["learner", "mentor", "organization", "admin"], {
    error: "Select a role",
  }),
  status: z.enum(["active", "pending", "suspended"], {
    error: "Select a status",
  }),
});
const adminRoadmapSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  category: z.enum(["role-based", "skill-based", "best-practices"], {
    error: "Select a category",
  }),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),
  status: z.enum(["draft", "published"], { error: "Select a status" }),
});
const adminContentSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters"),
  type: z.enum(["guide", "lesson-pack", "course", "deep-dive"], {
    error: "Select a content type",
  }),
  author: z.string().trim().min(2, "Author must be at least 2 characters"),
  url: optionalUrlSchema,
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters"),
  status: z.enum(["draft", "review", "published"], {
    error: "Select a status",
  }),
});

function FieldError({ error }) {
  return error ? (
    <span className="form-error" role="alert">
      {error.message}
    </span>
  ) : null;
}

function PublicForm({
  title,
  submitLabel,
  schema,
  children,
  footer,
  className = "",
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form
      className={`stakeholder-form ${className}`.trim()}
      noValidate
      onSubmit={handleSubmit(() => {})}
    >
      <h2>{title}</h2>
      {children({ register, errors })}
      <button className={className ? "auth-submit" : undefined} type="submit">
        {submitLabel}
      </button>
      {footer}
    </form>
  );
}

function ForgotPasswordForm() {
  return (
    <PublicForm
      title="Reset your password"
      submitLabel="Send reset instructions"
      schema={forgotPasswordSchema}
      className="auth-form"
      footer={
        <p className="form-helper">
          Remembered your password? <Link to="/login">Log in</Link>
        </p>
      }
    >
      {({ register, errors }) => (
        <>
          <div className="auth-field">
            <label htmlFor="forgot-email">Email address</label>
            <input
              id="forgot-email"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            <FieldError error={errors.email} />
          </div>
        </>
      )}
    </PublicForm>
  );
}

function ResetPasswordForm() {
  return (
    <PublicForm
      title="Choose a new password"
      submitLabel="Update password"
      schema={resetPasswordSchema}
      footer={
        <p className="form-helper">
          Back to <Link to="/login">Log in</Link>
        </p>
      }
    >
      {({ register, errors }) => (
        <>
          <label htmlFor="reset-password">New password</label>
          <input
            id="reset-password"
            type="password"
            autoComplete="new-password"
            {...register("password")}
          />
          <FieldError error={errors.password} />
          <label htmlFor="reset-confirm-password">Confirm new password</label>
          <input
            id="reset-confirm-password"
            type="password"
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          <FieldError error={errors.confirmPassword} />
        </>
      )}
    </PublicForm>
  );
}

function ProfileForm({ mode }) {
  const isEditing = mode === "edit";

  return (
    <PublicForm
      title={isEditing ? "Edit your profile" : "Complete your profile"}
      submitLabel={isEditing ? "Save changes" : "Save profile"}
      schema={profileSchema}
      className="auth-form"
      footer={
        <p className="form-helper">
          {isEditing ? (
            <>
              Need to complete your profile?{" "}
              <Link to="/profile/setup">Profile setup</Link>
            </>
          ) : (
            <>
              Already set up? <Link to="/profile/edit">Edit your profile</Link>
            </>
          )}
        </p>
      }
    >
      {({ register, errors }) => (
        <>
          <div className="auth-field">
            <label htmlFor="profile-name">Full name</label>
            <input
              id="profile-name"
              type="text"
              autoComplete="name"
              {...register("name")}
            />
            <FieldError error={errors.name} />
          </div>
          <div className="auth-field">
            <label htmlFor="profile-bio">About you</label>
            <textarea id="profile-bio" rows="4" {...register("bio")} />
            <FieldError error={errors.bio} />
          </div>
          <div className="auth-field">
            <label htmlFor="profile-portfolio">Portfolio URL</label>
            <input
              id="profile-portfolio"
              type="url"
              autoComplete="url"
              {...register("portfolio")}
            />
            <FieldError error={errors.portfolio} />
          </div>
          <div className="auth-field">
            <label htmlFor="profile-goal">Learning goal</label>
            <textarea id="profile-goal" rows="3" {...register("goal")} />
            <FieldError error={errors.goal} />
          </div>
        </>
      )}
    </PublicForm>
  );
}

function MentorApplicationForm() {
  return (
    <PublicForm
      title="Apply to become a mentor"
      submitLabel="Submit application"
      schema={mentorApplicationSchema}
      className="auth-form"
    >
      {({ register, errors }) => (
        <>
          <div className="auth-field">
            <label htmlFor="mentor-name">Full name</label>
            <input
              id="mentor-name"
              type="text"
              autoComplete="name"
              {...register("name")}
            />
            <FieldError error={errors.name} />
          </div>
          <div className="auth-field">
            <label htmlFor="mentor-email">Email address</label>
            <input
              id="mentor-email"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            <FieldError error={errors.email} />
          </div>
          <div className="auth-field">
            <label htmlFor="mentor-specialty">Area of expertise</label>
            <input
              id="mentor-specialty"
              type="text"
              {...register("specialty")}
            />
            <FieldError error={errors.specialty} />
          </div>
          <div className="auth-field">
            <label htmlFor="mentor-experience">Years of experience</label>
            <input
              id="mentor-experience"
              type="number"
              min="0"
              {...register("experience", { valueAsNumber: true })}
            />
            <FieldError error={errors.experience} />
          </div>
          <div className="auth-field">
            <label htmlFor="mentor-availability">Availability</label>
            <select
              id="mentor-availability"
              defaultValue=""
              {...register("availability")}
            >
              <option value="" disabled>
                Select availability
              </option>
              <option>Part-time</option>
              <option>Full-time</option>
              <option>Flexible</option>
            </select>
            <FieldError error={errors.availability} />
          </div>
          <div className="auth-field">
            <label htmlFor="mentor-bio">
              Experience and mentoring interests
            </label>
            <textarea id="mentor-bio" rows="4" {...register("bio")} />
            <FieldError error={errors.bio} />
          </div>
        </>
      )}
    </PublicForm>
  );
}

function OrganizationForm() {
  return (
    <PublicForm
      title="Set up your organization"
      submitLabel="Submit organization"
      schema={organizationSchema}
      className="auth-form"
    >
      {({ register, errors }) => (
        <>
          <div className="auth-field">
            <label htmlFor="organization-name">Organization name</label>
            <input
              id="organization-name"
              type="text"
              autoComplete="organization"
              {...register("name")}
            />
            <FieldError error={errors.name} />
          </div>
          <div className="auth-field">
            <label htmlFor="organization-contact">Contact name</label>
            <input
              id="organization-contact"
              type="text"
              autoComplete="name"
              {...register("contact")}
            />
            <FieldError error={errors.contact} />
          </div>
          <div className="auth-field">
            <label htmlFor="organization-email">Work email</label>
            <input
              id="organization-email"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            <FieldError error={errors.email} />
          </div>
          <div className="auth-field">
            <label htmlFor="organization-website">Website</label>
            <input
              id="organization-website"
              type="url"
              autoComplete="url"
              {...register("website")}
            />
            <FieldError error={errors.website} />
          </div>
          <div className="auth-field">
            <label htmlFor="organization-size">Team size</label>
            <select
              id="organization-size"
              defaultValue=""
              {...register("size")}
            >
              <option value="" disabled>
                Select team size
              </option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>201+</option>
            </select>
            <FieldError error={errors.size} />
          </div>
          <div className="auth-field">
            <label htmlFor="organization-interest">
              How will your team use DevPath?
            </label>
            <textarea
              id="organization-interest"
              rows="4"
              {...register("interest")}
            />
            <FieldError error={errors.interest} />
          </div>
        </>
      )}
    </PublicForm>
  );
}

function AdminForm({
  eyebrow,
  title,
  description,
  cancelTo,
  submitLabel,
  schema,
  children,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <>
      <header className="admin-page-header">
        <div>
          <p className="admin-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Link className="admin-button secondary" to={cancelTo}>
          Cancel
        </Link>
      </header>
      <form
        className="admin-panel admin-settings-form"
        noValidate
        onSubmit={handleSubmit(() => {})}
      >
        {children({ register, errors })}
        <button className="admin-button primary" type="submit">
          {submitLabel}
        </button>
      </form>
    </>
  );
}

function AdminUserForm({
  mode = "create",
  defaultRole = "learner",
  entityLabel = "user",
}) {
  const isEditing = mode === "edit";
  const collectionName =
    entityLabel === "organization" ? "organizations" : `${entityLabel}s`;

  return (
    <AdminForm
      eyebrow="USER MANAGEMENT"
      title={isEditing ? `Edit ${entityLabel}` : `Add ${entityLabel}`}
      description="Enter the account details and role."
      cancelTo={`/admin/${collectionName}`}
      submitLabel={isEditing ? "Save changes" : `Create ${entityLabel}`}
      schema={adminUserSchema}
    >
      {({ register, errors }) => (
        <>
          <h2>{entityLabel[0].toUpperCase() + entityLabel.slice(1)} details</h2>
          <label htmlFor="admin-user-name">
            {defaultRole === "organization" ? "Organization name" : "Name"}
          </label>
          <input id="admin-user-name" type="text" {...register("name")} />
          <FieldError error={errors.name} />
          <label htmlFor="admin-user-email">Email address</label>
          <input id="admin-user-email" type="email" {...register("email")} />
          <FieldError error={errors.email} />
          <label htmlFor="admin-user-role">Role</label>
          <select
            id="admin-user-role"
            defaultValue={defaultRole}
            {...register("role")}
          >
            <option value="learner">Learner</option>
            <option value="mentor">Mentor</option>
            <option value="organization">Organization</option>
            <option value="admin">Admin</option>
          </select>
          <FieldError error={errors.role} />
          <label htmlFor="admin-user-status">Status</label>
          <select
            id="admin-user-status"
            defaultValue="active"
            {...register("status")}
          >
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
          <FieldError error={errors.status} />
        </>
      )}
    </AdminForm>
  );
}

function AdminRoadmapForm({ mode = "create" }) {
  const isEditing = mode === "edit";

  return (
    <AdminForm
      eyebrow="ROADMAPS"
      title={isEditing ? "Edit roadmap" : "Add roadmap"}
      description="Add the details for a learning path in the DevPath library."
      cancelTo="/admin/roadmaps"
      submitLabel={isEditing ? "Save changes" : "Create roadmap"}
      schema={adminRoadmapSchema}
    >
      {({ register, errors }) => (
        <>
          <h2>Roadmap details</h2>
          <label htmlFor="roadmap-title">Title</label>
          <input id="roadmap-title" type="text" {...register("title")} />
          <FieldError error={errors.title} />
          <label htmlFor="roadmap-category">Category</label>
          <select
            id="roadmap-category"
            defaultValue="role-based"
            {...register("category")}
          >
            <option value="role-based">Role-based</option>
            <option value="skill-based">Skill-based</option>
            <option value="best-practices">Best practices</option>
          </select>
          <FieldError error={errors.category} />
          <label htmlFor="roadmap-description">Description</label>
          <textarea
            id="roadmap-description"
            rows="4"
            {...register("description")}
          />
          <FieldError error={errors.description} />
          <label htmlFor="roadmap-status">Status</label>
          <select
            id="roadmap-status"
            defaultValue="draft"
            {...register("status")}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
          <FieldError error={errors.status} />
        </>
      )}
    </AdminForm>
  );
}

function AdminContentForm({ mode = "create" }) {
  const isEditing = mode === "edit";

  return (
    <AdminForm
      eyebrow="GUIDES & COURSES"
      title={isEditing ? "Edit content" : "Add content"}
      description="Add a guide, lesson pack, or course to the content library."
      cancelTo="/admin/content"
      submitLabel={isEditing ? "Save changes" : "Create content"}
      schema={adminContentSchema}
    >
      {({ register, errors }) => (
        <>
          <h2>Content details</h2>
          <label htmlFor="content-title">Title</label>
          <input id="content-title" type="text" {...register("title")} />
          <FieldError error={errors.title} />
          <label htmlFor="content-type">Content type</label>
          <select id="content-type" defaultValue="guide" {...register("type")}>
            <option value="guide">Guide</option>
            <option value="lesson-pack">Lesson pack</option>
            <option value="course">Course</option>
            <option value="deep-dive">Deep dive</option>
          </select>
          <FieldError error={errors.type} />
          <label htmlFor="content-author">Author</label>
          <input id="content-author" type="text" {...register("author")} />
          <FieldError error={errors.author} />
          <label htmlFor="content-url">Resource URL</label>
          <input id="content-url" type="url" {...register("url")} />
          <FieldError error={errors.url} />
          <label htmlFor="content-description">Description</label>
          <textarea
            id="content-description"
            rows="4"
            {...register("description")}
          />
          <FieldError error={errors.description} />
          <label htmlFor="content-status">Status</label>
          <select
            id="content-status"
            defaultValue="draft"
            {...register("status")}
          >
            <option value="draft">Draft</option>
            <option value="review">Review</option>
            <option value="published">Published</option>
          </select>
          <FieldError error={errors.status} />
        </>
      )}
    </AdminForm>
  );
}

export {
  AdminContentForm,
  AdminRoadmapForm,
  AdminUserForm,
  ForgotPasswordForm,
  MentorApplicationForm,
  OrganizationForm,
  ProfileForm,
  ResetPasswordForm,
};
