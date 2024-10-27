// /lib/emailTemplate.js
export function generateEmailTemplate({ name, email, subject, message, date }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Portfolio Contact</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', Arial, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background-color: #f5f5f5;
        }

        .wrapper {
          background-color: #f5f5f5;
          padding: 40px 20px;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
        }

        .header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 0);
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .header-subtitle {
          font-size: 16px;
          opacity: 0.9;
        }

        .content {
          padding: 30px;
          background: white;
        }

        .sender-info {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 25px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 12px;
          align-items: center;
        }

        .label {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          min-width: 100px;
        }

        .value {
          color: #1e293b;
          font-weight: 500;
        }

        .message-box {
          background: #f8fafc;
          border-radius: 12px;
          padding: 25px;
          margin: 25px 0;
          border-left: 4px solid #3b82f6;
        }

        .message-content {
          color: #1e293b;
          font-size: 15px;
          line-height: 1.7;
        }

        .timestamp {
          text-align: right;
          color: #64748b;
          font-size: 13px;
          margin-top: 20px;
          font-style: italic;
        }

        .footer {
          background: #f8fafc;
          padding: 20px 30px;
          text-align: center;
          border-top: 1px solid #e2e8f0;
        }

        .devops-section {
          margin-top: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
          border-radius: 12px;
        }

        .devops-title {
          color: #1e40af;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 10px;
          margin-top: 15px;
        }

        .skill-tag {
          background: rgba(59, 130, 246, 0.1);
          color: #1e40af;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          text-align: center;
          font-weight: 500;
        }

        .cta-button {
          display: inline-block;
          padding: 12px 24px;
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          margin-top: 20px;
          transition: background 0.3s ease;
        }

        .cta-button:hover {
          background: #1d4ed8;
        }

        @media only screen and (max-width: 600px) {
          .wrapper {
            padding: 20px 10px;
          }
          
          .content {
            padding: 20px;
          }
          
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <div class="logo">DevOps Portfolio</div>
            <div class="header-subtitle">New Contact Message Received</div>
          </div>

          <div class="content">
            <div class="sender-info">
              <div class="info-grid">
                <span class="label">From:</span>
                <span class="value">${name}</span>
                
                <span class="label">Email:</span>
                <span class="value">${email}</span>
                
                <span class="label">Subject:</span>
                <span class="value">${subject}</span>
              </div>
            </div>

            <div class="message-box">
              <div class="message-content">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>

            <div class="devops-section">
              <div class="devops-title">DevOps Expertise Areas</div>
              <div class="skills-grid">
                <div class="skill-tag">Docker</div>
                <div class="skill-tag">Kubernetes</div>
                <div class="skill-tag">AWS</div>
                <div class="skill-tag">CI/CD</div>
                <div class="skill-tag">Terraform</div>
                <div class="skill-tag">Jenkins</div>
              </div>
              <div style="text-align: center; margin-top: 20px;">
                <a href="YOUR_PORTFOLIO_URL" class="cta-button">View Portfolio</a>
              </div>
            </div>

            <div class="timestamp">
              Message received on ${date}
            </div>
          </div>

          <div class="footer">
            <p style="color: #64748b; font-size: 14px;">
              This message was sent from your portfolio contact form.
              <br>
              © ${new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}
