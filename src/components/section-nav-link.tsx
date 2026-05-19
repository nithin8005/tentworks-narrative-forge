import { Link, useRouterState } from "@tanstack/react-router";

const GAME_SECTION_PATHS = ["/", "/games"] as const;

type Props = {
  sectionId: string;
  label: string;
  className?: string;
  onNavigate?: () => void;
};

export function SectionNavLink({ sectionId, label, className, onNavigate }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = GAME_SECTION_PATHS.includes(pathname as (typeof GAME_SECTION_PATHS)[number])
    ? pathname
    : "/";

  return (
    <Link
      to={base}
      hash={sectionId}
      onClick={onNavigate}
      className={className}
    >
      {label}
    </Link>
  );
}
