"use client";

export default function Skills() {
    return (
        <section className="py-24 border-t border-zinc-900 bg-zinc-950/30">
            <div className="container mx-auto px-6 md:px-12">
                 <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-2 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                     <h2 className="text-2xl font-bold font-mono tracking-tighter">Toolchain Inventory</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCategory title="Languages & Runtime" items={["TypeScript", "Python 3", "Solidity", "Golang", "C++", "SQL"]} />
                    <SkillCategory title="Frontend Arch" items={["React (RSC)", "React Query","NextJs", "ScaffoldEth", "TailwindCSS", "FramerMotion"]} />
                    <SkillCategory title="Backend Infra" items={["Django", "Flask",  "NextJs", "PostgreSQL", "Redis", "Docker", "Nginx"]} />
                    <SkillCategory title="AI & Data" items={["Gemini API", "OpenAI", "Numpy", "OpenCV", "Vector DBs"]} />
                </div>
            </div>
        </section>
    )
}

function SkillCategory({ title, items }: { title: string, items: string[] }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-2">{title}</h3>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item} className="font-mono text-sm text-zinc-300 flex items-center gap-2 hover:text-orange-500 transition-colors cursor-default">
                        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
