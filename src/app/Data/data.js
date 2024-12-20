import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from 'lucide-react'

export const infoData = [
  { icon: <User2 size={20} />, text: 'Ankit Kumar' },
  { icon: <PhoneCall size={20} />, text: '+91 9310126226' },
  { icon: <MailIcon size={20} />, text: 'en.ankitkumarpandey@gmail.com' },
  { icon: <Calendar size={20} />, text: 'Born on 25 March, 2003' },
  { icon: <GraduationCap size={20} />, text: 'B.Tech CSE' },
  { icon: <HomeIcon size={20} />, text: 'Naraina Village, New Delhi' },
]

export const qualificationData = [
  {
    title: 'Education',
    data: [
      {
        university: 'DPG Polytechnic',
        qualification: 'Diploma CS',
        year: '2020-2022',
      },
      {
        university: 'Noida Institute Of Engineering and Technology',
        qualification: 'B.Tech CSE',
        year: '2022-2025',
      },
    ],
  },
  {
    title: 'Experience',
    data: [
      {
        company: 'Automated Deployment Pipeline',
        position: 'Personal Project',
        year: '2023',
        description:
          'Developed a CI/CD pipeline using Jenkins, Docker, and AWS EC2 to automate the deployment process of a web application.',
      },
      {
        company: 'Kubernetes Cluster Management',
        position: 'Course Project',
        year: '2023',
        description:
          'Set up and managed a Kubernetes cluster for a microservices-based application, implementing auto-scaling and load balancing.',
      },
      {
        company: 'Infrastructure as Code with Terraform',
        position: 'Personal Project',
        year: '2022',
        description:
          'Created and maintained infrastructure as code using Terraform to provision and manage cloud resources on AWS and GCP.',
      },
    ],
  },
]

export const skillData = [
  {
    title: 'Skills',
    data: [
      { name: 'CI/CD (Jenkins, GitLab CI)' },
      { name: 'Containerization (Docker, Kubernetes)' },
      { name: 'Infrastructure as Code (Terraform, CloudFormation)' },
      { name: 'Cloud Platforms (AWS, GCP, Azure)' },
      { name: 'Configuration Management (Ansible)' },
      { name: 'Monitoring and Logging (Prometheus, Grafana, ELK Stack)' },
      { name: 'Version Control (Git, GitHub, GitLab)' },
      { name: 'Scripting (Python, Bash)' },
      { name: 'Database Management (MySQL, MongoDB)' },
      { name: 'Web Technologies (Node.js, React.js)' },
    ],
  },
  {
    title: 'Tools',
    data: [
      { imgPath: '/assets/about/aws.svg' },
      { imgPath: '/assets/about/azure.svg' },
      { imgPath: '/assets/about/docker.png' },
      { imgPath: '/assets/skills/kubernets.svg' },
      { imgPath: '/assets/skills/jenkins.svg' },
      { imgPath: '/assets/skills/terraform.svg' },
      { imgPath: '/assets/skills/ansible.svg' },
      { imgPath: '/assets/skills/prometheus.svg' },
      { imgPath: '/assets/skills/grafana.svg' },
      { imgPath: '/assets/skills/github.svg' },
      { imgPath: '/assets/skills/gitlab.svg' },
      { imgPath: '/assets/skills/mysql.svg' },
      { imgPath: '/assets/skills/nodejs.svg' },
      { imgPath: '/assets/skills/nextjs.svg' },
    ],
  },
]

export const workData = [
  {
    id: 'automated-deployment-pipeline',
    image: '/assets/work/1.png',
    category: 'DevOps',
    name: 'Automated Deployment Pipeline',
    description: 'Built a robust CI/CD pipeline using Jenkins, Docker, and AWS for automated testing and deployment of microservices.',
    longDescription: `A comprehensive CI/CD pipeline that automates the entire software delivery process. The pipeline includes automated testing, security scanning, and deployment to multiple environments.

Key Features:
• Multi-stage pipeline with dev, staging, and production environments
• Automated testing with JUnit and Selenium
• Container orchestration with Docker and Kubernetes
• Infrastructure as Code using Terraform
• Monitoring with Prometheus and Grafana`,
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Prometheus'],
    github: 'https://github.com/yourusername/deployment-pipeline',
    demo: 'https://pipeline-demo.yourdomain.com',
    achievements: [
      'Reduced deployment time by 70%',
      'Improved system reliability by 45%',
      'Implemented zero-downtime deployments'
    ]
  },
  {
    id: 'kubernetes-cluster-management',
    image: '/assets/work/2.png',
    category: 'DevOps',
    name: 'Kubernetes Cluster Management',
    description: 'Designed and implemented a scalable Kubernetes cluster with automated scaling and monitoring capabilities.',
    longDescription: `A production-grade Kubernetes cluster management solution that handles microservices deployment and scaling automatically.

Key Features:
• Auto-scaling based on CPU and memory metrics
• Custom monitoring and alerting system
• GitOps workflow with ArgoCD
• Service mesh implementation with Istio
• Centralized logging with ELK stack`,
    tech: ['Kubernetes', 'Helm', 'ArgoCD', 'Istio', 'ELK Stack', 'Prometheus'],
    github: 'https://github.com/yourusername/k8s-cluster',
    demo: 'https://k8s-demo.yourdomain.com',
    achievements: [
      'Achieved 99.99% uptime',
      'Reduced operational costs by 40%',
      'Implemented blue-green deployments'
    ]
  },
  {
    id: 'infrastructure-as-code',
    image: '/assets/work/3.png',
    category: 'DevOps',
    name: 'Infrastructure as Code Platform',
    description: 'Developed a comprehensive IaC solution using Terraform and AWS to manage cloud infrastructure programmatically.',
    longDescription: `A scalable Infrastructure as Code platform that manages multi-region cloud deployments with version control and automated testing.

Key Features:
• Multi-environment infrastructure management
• Automated security compliance checks
• Cost optimization strategies
• Disaster recovery automation
• Infrastructure testing with Terratest`,
    tech: ['Terraform', 'AWS', 'Python', 'Ansible', 'CloudFormation', 'Jenkins'],
    github: 'https://github.com/yourusername/iac-platform',
    demo: 'https://iac-demo.yourdomain.com',
    achievements: [
      'Reduced infrastructure provisioning time by 85%',
      'Implemented infrastructure security best practices',
      'Achieved 100% infrastructure documentation'
    ]
  },
  {
    id: 'monitoring-system',
    image: '/assets/work/4.png',
    category: 'DevOps',
    name: 'Enterprise Monitoring System',
    description: 'Created a comprehensive monitoring and alerting system using Prometheus, Grafana, and ELK stack.',
    longDescription: `An enterprise-grade monitoring solution that provides real-time insights into system performance and business metrics.

Key Features:
• Real-time metrics visualization
• Custom alerting rules
• Log aggregation and analysis
• APM integration
• Custom dashboards for different stakeholders`,
    tech: ['Prometheus', 'Grafana', 'ELK Stack', 'Node Exporter', 'AlertManager', 'Loki'],
    github: 'https://github.com/yourusername/monitoring-system',
    demo: 'https://monitoring-demo.yourdomain.com',
    achievements: [
      'Reduced incident response time by 60%',
      'Implemented predictive alerting',
      'Created custom monitoring solutions'
    ]
  },
  {
    id: 'microservices-platform',
    image: '/assets/work/5.png',
    category: 'Development',
    name: 'Microservices Platform',
    description: 'Built a scalable microservices platform using Node.js, React, and MongoDB with comprehensive DevOps integration.',
    longDescription: `A modern microservices platform that demonstrates best practices in both development and operations.

Key Features:
• Event-driven architecture
• API Gateway implementation
• Service discovery
• Circuit breaker patterns
• Distributed tracing`,
    tech: ['Node.js', 'React', 'MongoDB', 'Docker', 'Kubernetes', 'Redis'],
    github: 'https://github.com/yourusername/microservices-platform',
    demo: 'https://microservices-demo.yourdomain.com',
    achievements: [
      'Handled 1M+ requests per day',
      'Achieved 99.9% service availability',
      'Implemented automated scaling'
    ]
  },
  {
    id: 'security-automation',
    image: '/assets/work/6.png',
    category: 'DevOps',
    name: 'Security Automation Framework',
    description: 'Developed an automated security testing and compliance checking framework for cloud infrastructure.',
    longDescription: `A comprehensive security automation framework that ensures infrastructure and application security through continuous testing and monitoring.

Key Features:
• Automated vulnerability scanning
• Compliance checking
• Secret management
• Security policy enforcement
• Incident response automation`,
    tech: ['Python', 'AWS Security Hub', 'HashiCorp Vault', 'OWASP ZAP', 'SonarQube', 'Trivy'],
    github: 'https://github.com/yourusername/security-automation',
    demo: 'https://security-demo.yourdomain.com',
    achievements: [
      'Automated 90% of security checks',
      'Reduced security incidents by 75%',
      'Achieved compliance with multiple standards'
    ]
  }
]
