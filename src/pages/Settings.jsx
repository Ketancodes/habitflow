import {
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Clock,
  Edit3,
  Lock,
  Mail,
  Moon,
  Palette,
  Settings as SettingsIcon,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  User,
  Volume2,
} from "lucide-react";

export default function Settings() {
  const rowIcon =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30313d] bg-[#1d1e27] text-[#c7c5d8]";
  const sectionCard =
    "rounded-3xl border border-[#30313d] bg-[#171820]/90 px-5 py-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)] md:px-6";
  const divider = "border-t border-[#30313d]";
  const editButton =
    "inline-flex h-10 items-center gap-2 rounded-xl border border-[#6d5cff]/50 px-4 text-sm font-semibold text-[#a78bfa] transition hover:bg-[#6d5cff]/10";

  return (
    <section className="min-h-screen bg-[#181717] px-4 py-5 text-white md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6d5cff]/15 text-[#8b5cf6]">
            <SettingsIcon size={34} />
          </div>

          <div>
            <h1 className="text-3xl font-semibold md:text-3xl">Settings</h1>
            <p className="mt-1 text-sm text-[#b9bac6] md:text-base">
              Manage your preferences and account settings
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Profile */}
          <div className={sectionCard}>
            <div className="flex items-center justify-between gap-4 pb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d5cff]/20 text-[#8b5cf6]">
                  <User size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Profile</h2>
                  <p className="text-sm text-[#b9bac6]">
                    View and update your personal information
                  </p>
                </div>
              </div>
              <ChevronRight className="hidden text-[#c7c5d8] sm:block" />
            </div>

            <div className={divider}>
              <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className={rowIcon}>
                    <User size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Username</h3>
                    <p className="text-sm text-[#b9bac6]">Aarav</p>
                  </div>
                </div>
                <button className={editButton}>
                  <Edit3 size={17} />
                  Edit
                </button>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#30313d] py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className={rowIcon}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-[#b9bac6]">aarav@example.com</p>
                  </div>
                </div>
                <button className={editButton}>
                  <Edit3 size={17} />
                  Edit
                </button>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className={sectionCard}>
            <div className="flex items-center gap-4 pb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d5cff]/20 text-[#8b5cf6]">
                <Palette size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Appearance</h2>
                <p className="text-sm text-[#b9bac6]">
                  Customize how HabitFlow looks for you
                </p>
              </div>
            </div>

            <div className={`${divider} pt-5`}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold">Theme</h3>
                  <p className="text-sm text-[#b9bac6]">Dark</p>
                </div>

                <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#30313d]">
                  <button className="flex min-w-0 flex-col items-center gap-1 px-5 py-3 text-sm text-[#c7c5d8]">
                    <Sun size={21} />
                    Light
                  </button>
                  <button className="flex min-w-0 flex-col items-center gap-1 border-x border-[#7c5cff] bg-[#6d5cff]/15 px-5 py-3 text-sm font-semibold text-white">
                    <Moon size={21} />
                    Dark
                  </button>
                  <button className="flex min-w-0 flex-col items-center gap-1 px-5 py-3 text-sm text-[#c7c5d8]">
                    <SettingsIcon size={21} />
                    System
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className={sectionCard}>
            <div className="flex items-center gap-4 pb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d5cff]/20 text-[#8b5cf6]">
                <SlidersHorizontal size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Preferences</h2>
                <p className="text-sm text-[#b9bac6]">
                  Set your default preferences
                </p>
              </div>
            </div>

            <div className={divider}>
              <SettingSelect
                icon={<CalendarDays size={22} />}
                title="Start week on"
                value="Monday"
              />
              <SettingToggle
                icon={<Bell size={22} />}
                title="Daily reminder"
                subtitle="Get reminded about your habits"
              />
              <SettingSelect
                icon={<Clock size={22} />}
                title="Reminder time"
                value="09:00 PM"
              />
              <SettingToggle
                icon={<Volume2 size={22} />}
                title="Complete sound"
                subtitle="Play a sound when you complete a habit"
              />
            </div>
          </div>

          {/* Account */}
          <div className={sectionCard}>
            <div className="flex items-center gap-4 pb-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d5cff]/20 text-[#8b5cf6]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h2 className="text-xl font-bold">Account & Security</h2>
                <p className="text-sm text-[#b9bac6]">
                  Manage your account and keep it secure
                </p>
              </div>
            </div>

            <div className={divider}>
              <ActionRow
                icon={<Lock size={22} />}
                title="Change password"
                subtitle="Update your password"
              />
              <ActionRow
                icon={<Mail size={22} />}
                title="Email notifications"
                subtitle="Manage what emails you receive"
              />
              <ActionRow
                icon={<Lock size={22} />}
                title="Log out"
                subtitle="Sign out from your account"
                danger
              />
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-hidden rounded-3xl border border-[#6d5cff]/35 bg-[#6d5cff]/15 px-5 py-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#6d5cff]/20 text-[#d8b4fe]">
              <Lock size={26} />
            </div>
            <div>
              <h3 className="font-semibold text-[#c4b5fd]">
                Your data is safe with us.
              </h3>
              <p className="mt-1 text-sm text-[#cfcbd9]">
                We never share your personal information with anyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SettingSelect({ icon, title, value }) {
  return (
    <div className="flex flex-col gap-4 border-t border-[#30313d] py-4 first:border-t-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30313d] bg-[#1d1e27] text-[#c7c5d8]">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-[#b9bac6]">{value}</p>
        </div>
      </div>

      <button className="flex h-12 w-full items-center justify-between rounded-xl border border-[#30313d] px-4 text-[#d8d5e5] sm:w-56">
        {value}
        <ChevronDown size={18} />
      </button>
    </div>
  );
}

function SettingToggle({ icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-[#30313d] py-4 first:border-t-0">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30313d] bg-[#1d1e27] text-[#c7c5d8]">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-[#b9bac6]">{subtitle}</p>
        </div>
      </div>

      <button className="relative h-8 w-14 shrink-0 rounded-full bg-[#6d5cff]">
        <span className="absolute right-1 top-1 h-6 w-6 rounded-full bg-white"></span>
      </button>
    </div>
  );
}

function ActionRow({ icon, title, subtitle, danger = false }) {
  return (
    <button className="flex w-full items-center justify-between gap-4 border-t border-[#30313d] py-4 text-left first:border-t-0">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#30313d] bg-[#1d1e27] ${
            danger ? "text-[#ff5f6d]" : "text-[#c7c5d8]"
          }`}
        >
          {icon}
        </div>
        <div>
          <h3 className={`font-semibold ${danger ? "text-[#ff5f6d]" : ""}`}>
            {title}
          </h3>
          <p className="text-sm text-[#b9bac6]">{subtitle}</p>
        </div>
      </div>

      <ChevronRight size={20} className="shrink-0 text-[#c7c5d8]" />
    </button>
  );
}
