'use client';

import { Technology } from '@/types';

interface TechStackProps {
  technologies: readonly Technology[];
  className?: string;
}

export const TechStack = ({ technologies, className = '' }: TechStackProps) => {
  return (
    <div className={`text-left ${className}`}>
      <div className="text-xs sm:text-sm font-mono text-hsl(var(--accent)) mb-3 sm:mb-4 opacity-80">
        TECH STACK
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {technologies.map((tech, idx) => {
          const IconComponent = tech.icon;
          return (
            <span
              key={`${tech.name}-${idx}`}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-mono rounded flex items-center gap-2"
              style={{
                backgroundColor: 'hsl(var(--accent) / 0.1)',
                color: 'hsl(var(--accent))',
                border: '1px solid hsl(var(--accent) / 0.2)',
              }}
              title={`${tech.name} - ${tech.level}% proficiency`}
            >
              <IconComponent className="w-3 h-3" />
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};
