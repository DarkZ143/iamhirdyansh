import { Metadata } from "next";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

export const metadata: Metadata = {
    title: "About | Hirdyansh Singh",
    description:
        "Learn more about Hirdyansh Singh - Software Engineer at Wipro, with expertise in Python, SQL, Java, Data Science, and real-world software development.",
};

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1b2d] to-[#1a2338] text-gray-200 overflow-hidden">
            {/* Futuristic grid background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.2)_0,transparent_100%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

            <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                {/* Intro */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                        About Me
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
                        Hi, I’m{" "}
                        <span className="font-semibold text-white">Hirdyansh Singh</span>, a
                        Software Engineer at{" "}
                        <span className="text-cyan-400">Wipro</span>. I love solving
                        real-world problems with code, building scalable software, and
                        working with modern technologies to create meaningful impact.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    {/* Education */}
                    <Card title="Education" icon={<GraduationCap className="w-6 h-6" />}>
                        <ul className="space-y-3">
                            <li>
                                🎓 Diploma in Computer Science & Engineering —{" "}
                                <span className="text-cyan-300">
                                    R.R. Institute of Modern Polytechnic (2025)
                                </span>
                            </li>
                            <li>
                                📘 Intermediate (Class XII) —{" "}
                                <span className="text-cyan-300">
                                    C.I.V.P.S.V.M Inter College (2022)
                                </span>
                            </li>
                            <li>
                                📗 Matriculation (Class X) —{" "}
                                <span className="text-cyan-300">
                                    C.I.V.P.S.V.M Inter College (2020)
                                </span>
                            </li>
                        </ul>
                    </Card>

                    {/* Skills */}
                    <Card title="Skills & Tools" icon={<Code2 className="w-6 h-6" />}>
                        <div className="grid md:grid-cols-2 gap-3">
                            <SkillItem text="Python, SQL, Java, JavaScript, DSA" />
                            <SkillItem text="Excel (Pivot Tables, Charts), Power BI" />
                            <SkillItem text="GitHub, VS Code, APIs" />
                            <SkillItem text="HTML, CSS, JavaScript" />
                        </div>
                    </Card>

                    {/* Internships */}
                    <Card
                        title="Internships & Training"
                        icon={<Briefcase className="w-6 h-6" />}
                    >
                        <div className="space-y-6">
                            <Internship
                                company="Arcane Infotech Group of Companies"
                                role="Python Intern"
                                duration="Aug 2024 – Sep 2024"
                                points={[
                                    "Automated data extraction & cleaning processes using Python.",
                                    "Improved reporting systems by 20%.",
                                    "Analyzed sales data with Excel & Power BI.",
                                    "Built monthly trends & patterns for data-driven decision making.",
                                ]}
                            />
                            <Internship
                                company="Wipro"
                                role="IT Admin & Java Developer Trainee"
                                duration="1-Month Training"
                                points={[
                                    "Hands-on with IT Admin: system configuration & troubleshooting.",
                                    "Worked with SCCM & Jamf Pro for app/device management.",
                                    "Learned Java fundamentals (OOP, JDBC, Collections).",
                                    "Applied system administration + Java-based projects.",
                                ]}
                            />
                        </div>
                    </Card>

                    {/* Projects */}
                    <Card title="Projects 🚀">
                        <Project
                            name="MSI with File & Folder Operations using PSADT"
                            points={[
                                "Automated create, move & delete operations during installation.",
                                "Enhanced installer with logging, rollback & error handling.",
                                "Custom dialogs for user-friendly installation experience.",
                            ]}
                        />
                        <Project
                            name="Database Management Application (Python)"
                            points={[
                                "CLI app to manage databases with CRUD & reporting.",
                                "Export reports in PDF format.",
                                "Created dashboards in Power BI for analysis.",
                            ]}
                        />
                        <Project
                            name="E-commerce Sales Dashboard"
                            points={[
                                "Processed sales data with Python, SQL & Pandas.",
                                "Created dashboards in Power BI/Excel showing revenue, profit, margins.",
                                "Identified seasonal sales trends & top-performing regions.",
                            ]}
                        />
                    </Card>

                    {/* Certifications */}
                    <Card title="Certifications" icon={<Award className="w-6 h-6" />}>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Intersala | Data Science (Dec 2024)</li>
                            <li>
                                Udemy | Ultimate Excel with Data Analysis & VBA Macros (Nov 2024)
                            </li>
                            <li>Udemy | Python (Nov 2024)</li>
                            <li>Great Learning | Data Structure Using C (Mar 2024)</li>
                            <li>Office Master | Excel using AI Workshop</li>
                        </ul>
                    </Card>
                </div>
            </section>
        </main>
    );
}

/* ---------------- Components ---------------- */

function Card({
    title,
    icon,
    children,
}: {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] transition transform backdrop-blur-md">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-cyan-300">
                {icon} {title}
            </h2>
            {children}
        </div>
    );
}

function SkillItem({ text }: { text: string }) {
    return (
        <div className="bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/20 transition">
            {text}
        </div>
    );
}

function Internship({
    company,
    role,
    duration,
    points,
}: {
    company: string;
    role: string;
    duration: string;
    points: string[];
}) {
    return (
        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-white">
                {company} — {role}
            </h3>
            <p className="text-xs text-gray-400">{duration}</p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                {points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
        </div>
    );
}

function Project({ name, points }: { name: string; points: string[] }) {
    return (
        <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-4">
            <h3 className="font-semibold text-white">{name}</h3>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                {points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
        </div>
    );
}
