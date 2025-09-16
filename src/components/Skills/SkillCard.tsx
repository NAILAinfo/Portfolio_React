import React from "react";

type SkillCardProps = {
  logo: string;
  name: string;
  strengths: string[];
  experience: string;
};

export default function SkillCard({ logo, name, strengths, experience }: SkillCardProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-2xl shadow bg-white hover:shadow-md transition">
      <img src={logo} alt={name} className="w-12 h-12" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">
          {strengths.join(", ")}
        </p>
        <p className="text-xs text-gray-500 mt-1">Expérience : {experience}</p>
      </div>
    </div>
  );
}
