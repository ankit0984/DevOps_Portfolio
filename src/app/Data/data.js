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
    id: 'homly-interior-design',
    image: '/assets/work/homely.png',
    category: 'Web Development',
    name: 'Homly - Interior Design Portfolio',
    description:
      'Homly is a modern and interactive interior design portfolio platform designed to showcase stunning design projects. The platform enables interior designers and firms to display their work with high-quality images, animations, and detailed project descriptions. Potential clients can explore different design categories, view past projects, and directly contact designers for services. Built with Next.js for fast performance, styled with TailwindCSS, and enhanced with Framer Motion for smooth animations. The platform also includes a fully implemented CI/CD pipeline for automated deployment, ensuring seamless updates and high reliability.',
    Key_Features: [
      'Beautifully crafted portfolio layout',
      'Interactive animations with Framer Motion',
      'Responsive design for all devices',
      'Contact form for client inquiries',
      'Optimized performance with Next.js',
      'CI/CD pipeline for automated deployment',
    ],
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'CI/CD'],
    github: 'https://github.com/ankit0984/Homely.git',
    demo: 'https://homely.lms-app.workers.dev/',
    achievements: [
      'Optimized page speed for better user experience',
      'Seamless animations for enhanced engagement',
      'Automated deployment for faster updates',
    ],
    status: 'Completed',
  },

  {
    id: 'game-db',
    image: '/assets/work/gamedb.png',
    category: 'Web Development',
    name: 'Game Database Management',
    description: `Game Database Management is a comprehensive platform designed to store, manage, and organize game details efficiently. It allows users to browse a vast collection of games with detailed metadata, including release dates, genres, and developer information. The platform features advanced search and filtering capabilities, enabling users to find specific games quickly. With a robust backend powered by Node.js and Express.js, it ensures seamless data handling and fast responses. Redis caching optimizes performance, reducing load times, while MongoDB provides a scalable database solution. The platform also includes user authentication, role-based access control, and automated email notifications for new game additions. Designed with a modern Next.js frontend and styled using ShadCN UI, it delivers a smooth and interactive user experience. Additionally, the entire system is containerized with Docker for easy deployment and scalability.`,
    Key_Features: [
      'Game catalog with detailed metadata',
      'Advanced search and filtering options',
      'User authentication and role-based access control',
      'Automated email notifications for new game additions',
      'Efficient caching with Redis for faster responses',
      'Dockerized environment for easy deployment',
    ],
    tech: [
      'Next.js',
      'ShadCN UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'Nodemailer',
      'Docker',
    ],
    github: 'https://github.com/ankit0984/project-gamedb.git',
    demo: 'https://project-gamedb.vercel.app',
    achievements: [
      'Optimized queries reduced response time by 50%',
      'Implemented efficient caching strategies',
      'Scalable architecture for handling large datasets',
    ],
    status: 'Completed',
  },

  {
    id: 'pagebase-ebook-platform',
    image: '/assets/work/pagebase.png',
    category: 'Web Development',
    name: 'PageBase - Ebook Management Platform',
    description:
      'PageBase is a centralized ebook management platform designed for organizing and accessing high-quality books related to programming, databases, and various technical domains. Unlike scattered resources across multiple sites, PageBase ensures that all essential ebooks are available in one place, making it easier for users to find the right materials. Whether you are a developer, student, or researcher, PageBase simplifies ebook discovery and access, making it an essential tool for learning and reference.',
    Key_Features: [
      'Centralized collection of programming and database ebooks',
      'Advanced search and categorization',
      'User-friendly interface with ShadCN UI',
      'Email notifications for new additions',
      'Optimized backend with Redis for fast performance',
      'Dockerized deployment for scalability',
    ],
    tech: [
      'Next.js',
      'TailwindCSS',
      'ShadCN UI',
      'Node.js',
      'Express',
      'MongoDB',
      'Redis',
      'Nodemailer',
      'Docker',
    ],
    github: 'https://github.com/ankit0984/PageBase.git',
    demo: '#',
    achievements: [
      'Improved accessibility to technical ebooks',
      'Optimized search performance with Redis',
      'Streamlined deployment using Docker',
    ],
    status: 'Completed',
  },
  {
    id: 'gamedb-devops',
    image: '/assets/work/gamedb_devops.png',
    category: 'DevOps',
    name: 'GameDB DevOps Architecture',
    description:
      'Designed and deployed a cloud-native, containerized infrastructure for GameDB, ensuring scalability, reliability, and automated deployment. The architecture leverages Kubernetes for orchestration, Docker for containerization, and AWS services for cloud hosting. The system includes a CI/CD pipeline, load balancing, and service discovery to optimize performance. It enables seamless game database management with high availability and fault tolerance. The backend, built with Node.js and MongoDB, efficiently handles data processing and retrieval, while the frontend, powered by Next.js, delivers an interactive user experience. Kubernetes ingress and AWS ALB (Application Load Balancer) ensure smooth traffic management, providing a robust, secure, and efficient platform for gaming-related applications.',
    Key_Features: [
      'Containerized frontend, backend, and database using Docker',
      'Orchestrated microservices with Kubernetes',
      'Automated CI/CD deployment pipeline',
      'AWS ALB (Application Load Balancer) for traffic management',
      'High availability and fault tolerance',
      'Optimized backend using Node.js and MongoDB',
    ],
    tech: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Elastic Container Registry',
      'AWS EC2',
      'ingress',
      'AWS Load Balancer',
    ],
    github: 'https://github.com/ankit0984/project-gamedb.git',
    demo: '#',
    achievements: [
      'Enhanced deployment speed with automated CI/CD',
      'Achieved seamless scalability with Kubernetes',
      'Reduced downtime with load balancing and fault tolerance',
    ],
    status: 'Completed',
  },
  {
    id: 'ci-cd',
    image: '/assets/work/homely-cicd.png',
    category: 'DevOps',
    name: 'CI/CD Pipeline for Homely Web Dev',
    description:
      'Developed a robust CI/CD pipeline for the Homely web development project using Jenkins, GitHub, and AWS. The pipeline automates the entire software delivery process, ensuring smooth deployments, faster feedback loops, and improved system reliability. The process begins with an automatic trigger upon code push to GitHub, initiating build compilation and integration tests. Artifacts are stored in an AWS S3 bucket, ensuring secure and efficient storage. The pipeline then automates deployments to AWS EC2 and Elastic Beanstalk, optimizing scalability and performance. This setup significantly reduces deployment time, minimizes human intervention, and enhances overall software quality. By leveraging Jenkins for automation, AWS services for deployment, and GitHub for version control, the project ensures continuous and stable software delivery with minimal downtime.',
    Key_Features: [
      'Automatic build trigger on code push',
      'Code compilation and integration testing',
      'Artifact storage in S3',
      'Deployment to EC2 and Elastic Beanstalk',
    ],
    tech: ['Jenkins', 'GitHub', 'AWS EC2', 'AWS S3', 'AWS Elastic Beanstalk'],
    github: 'https://github.com/ankit0984/Homely.git',
    demo: '#',
    achievements: [
      'Reduced deployment time by 70%',
      'Automated testing and integration processes',
      'Improved application reliability through CI/CD automation',
    ],
    status: 'Completed',
  },
  {
    id: 'lms-cicd',
    image: '/assets/work/lms-deploy-arch.png',
    category: 'DevOps',
    name: 'Three-Tier LMS Web Application CI/CD Pipeline',
    description:
      'This project involves designing and implementing a robust CI/CD pipeline for a three-tier Learning Management System (LMS) web application. The pipeline is built using Jenkins, GitHub, AWS ECR, and Kubernetes to automate the building, testing, and deployment of Dockerized applications. The CI/CD process is triggered through GitHub, which integrates with Jenkins to perform code compilation, testing, and Docker image creation. These images are then pushed to AWS ECR for secure storage and deployed to a Kubernetes cluster. The architecture follows a structured three-tier model, with Next.js handling the frontend, Java Spring Boot powering the backend, and PostgreSQL/MongoDB managing the database layer. AWS infrastructure components like Load Balancer and AWS Secret Manager are incorporated to enhance security and optimize traffic management. This approach ensures high availability, seamless deployments, and improved system scalability while reducing manual intervention and minimizing downtime. The system is designed for enterprises looking to modernize their application deployment process efficiently.',
    Key_Features: [
      'Automated CI/CD pipeline with Jenkins',
      'Containerized deployment with AWS ECR and Kubernetes',
      'Three-tier architecture (Frontend, Backend, Database)',
      'AWS infrastructure integration (Load Balancer, Secret Manager)',
      'Zero-downtime deployment',
      'Scalability and security enhancements',
    ],
    tech: [
      'Jenkins',
      'GitHub',
      'Docker',
      'Kubernetes',
      'AWS ECR',
      'AWS EC2',
      'AWS Load Balancer',
      'AWS Secret Manager',
      'Next.js',
      'Java Spring Boot',
      'PostgreSQL',
      'MongoDB',
    ],
    github: 'https://github.com/yourusername/lms-cicd',
    demo: 'https://lms-demo.yourdomain.com',
    achievements: [
      'Automated deployment pipeline with zero-downtime updates',
      'Improved security with AWS Secret Manager',
      'Optimized scalability using Kubernetes orchestration',
      'Reduced deployment time by 70% through automation',
    ],
    status: 'ongoing',
  },
]

