"use client";

import { Card } from "flowbite-react";

interface SimpleCardProps {
  title: string;
  content: string;
  href?: string | null;
}

export default function SimpleCard({
  title,
  content,
  href = null,
}: SimpleCardProps) {
  return (
    <Card
      className="max-w-sm"
      {...(href ? { href } : {})} // Only include href if it's provided
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    </Card>
  );
}
