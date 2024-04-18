import { InfiniteMovingCards } from "./infinite-moving-cards";

export default function Skills() {
    const skills = [
        { title: "images/c.png", name: "C" },
        { title: "/images/cpp.png", name: "C++" },
        { title: "/images/python.png", name: "Python" },
        { title: "/images/java.png", name: "Java" },
        { title: "/images/javascript.png", name: "JavaScript" },
        { title: "/images/typescript.png", name: "TypeScript" },
        {title: "/images/react.png", name: "React" },
        {title: "/images/angular.jpeg", name: "Angular" },
        { title: "/images/nextjs.png", name: "Next.js" },
        { title: "/images/nodejs.png", name: "Node.js" },
        { title: "/images/django.png", name: "Django" },
        { title: "/images/flask.png", name: "Flask" },
        { title: "/images/docker.png", name: "Docker" },
        { title: "/images/kubernetes.png", name: "Kubernetes" },
        { title: "/images/git.png", name: "Git" },
        { title: "/images/ansible.png", name: "Ansible" },
        { title: "/images/terraform.png", name: "Terraform" },
        { title: "/images/aws.png", name: "AWS" },
        { title: "/images/linux.jpeg", name: "Linux" },
    ];
    return (
        <InfiniteMovingCards items={skills} direction="left" speed="slow" className="w-full p-28 " />
    );
}
