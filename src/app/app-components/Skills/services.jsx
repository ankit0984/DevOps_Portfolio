import React from 'react'
import {
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Database,
  Shield,
} from 'lucide-react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

const servicesData = [
  {
    icon: <Cloud className="w-10 h-10" />,
    title: 'Cloud Infrastructure',
    description:
      'Designing, implementing, and managing scalable cloud infrastructures. Expertise in multi-cloud environments, infrastructure as code, and cloud-native technologies.',
    skills: 'AWS, Azure, GCP, Terraform, CloudFormation',
    projectCount: 20,
  },
  {
    icon: <GitBranch className="w-10 h-10" />,
    title: 'CI/CD Pipelines',
    description:
      'Building and optimizing continuous integration and delivery pipelines. Automating build, test, and deployment processes for faster and more reliable software delivery.',
    skills: 'Jenkins, GitLab CI, GitHub Actions, ArgoCD',
    projectCount: 15,
  },
  {
    icon: <Terminal className="w-10 h-10" />,
    title: 'Infrastructure Automation',
    description:
      'Automating infrastructure provisioning, configuration management, and application deployment. Implementing Infrastructure as Code (IaC) practices for consistent and repeatable environments.',
    skills: 'Ansible, Puppet, Chef, Terraform',
    projectCount: 18,
  },
  {
    icon: <Server className="w-10 h-10" />,
    title: 'Containerization & Orchestration',
    description:
      'Containerizing applications and managing container orchestration platforms. Ensuring scalability, high availability, and efficient resource utilization.',
    skills: 'Docker, Kubernetes, OpenShift, Helm',
    projectCount: 25,
  },
  {
    icon: <Database className="w-10 h-10" />,
    title: 'Database Management',
    description:
      'Managing and optimizing database systems, including relational and NoSQL databases. Implementing high availability, backup, and disaster recovery solutions.',
    skills: 'MySQL, PostgreSQL, MongoDB, Redis',
    projectCount: 12,
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Security & Compliance',
    description:
      'Implementing security best practices and ensuring compliance with industry standards. Conducting security audits, vulnerability assessments, and implementing security automation.',
    skills: 'SAST, DAST, OWASP, CIS Benchmarks',
    projectCount: 10,
  },
]

export default function DevOpsServices() {
  return (
    <section id="skills" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item, index) => {
            return (
              <Card className="flex flex-col h-full" key={index}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {React.cloneElement(item.icon, {
                      className: 'w-8 h-8 text-primary',
                    })}
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="text-sm font-medium">
                    Skills:{' '}
                    <span className="text-muted-foreground">{item.skills}</span>
                  </div>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  Projects Completed: {item.projectCount}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
