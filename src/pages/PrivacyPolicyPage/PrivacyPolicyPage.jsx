import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import css from './PrivacyPolicyPage.module.css';

function PrivacyPolicyPage() {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <h2 className={css.title}>Privacy Policy</h2>
          <p className={css.updated}>Last updated: 18/04/2026</p>

          <p className={css.intro}>
            This Privacy Policy explains how we collect, use, and protect your
            information when you use our application (the "Service").
          </p>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>1. Information We Collect</h3>
            <p className={css.subtitle}>a) Information you provide</p>
            <ul className={css.list}>
              <li>Name</li>
              <li>Email address</li>
              <li>Password (stored in encrypted/hashed form)</li>
            </ul>
            <p className={css.subtitle}>b) Authentication data</p>
            <p className={css.text}>
              If you sign in using Google, we receive basic profile information
              such as name and email address. We do not access your Google
              password.
            </p>
            <p className={css.subtitle}>c) Technical data</p>
            <ul className={css.list}>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Basic usage data (for functionality and security)</li>
            </ul>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>2. How We Use Your Information</h3>
            <ul className={css.list}>
              <li>Create and manage your account</li>
              <li>Authenticate users</li>
              <li>Provide and maintain the Service</li>
              <li>Improve functionality and security</li>
            </ul>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>3. Legal Basis (GDPR)</h3>
            <p className={css.text}>
              If you are in the European Economic Area, we process your data
              based on:
            </p>
            <ul className={css.list}>
              <li>Your consent</li>
              <li>Performance of a contract (providing the Service)</li>
            </ul>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>4. Data Storage</h3>
            <p className={css.text}>
              Your data is stored securely. We take reasonable technical and
              organizational measures to protect it.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>5. Data Sharing</h3>
            <p className={css.text}>
              We do not sell, rent, or share your personal data with third
              parties, except when required by law or to protect the Service
              from abuse.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>6. Data Retention</h3>
            <p className={css.text}>
              We keep your data as long as your account is active. You may
              request deletion at any time.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>7. Your Rights</h3>
            <p className={css.text}>Under GDPR, you have the right to:</p>
            <ul className={css.list}>
              <li>Access your data</li>
              <li>Correct your data</li>
              <li>Delete your data</li>
              <li>Restrict processing</li>
              <li>Data portability</li>
            </ul>
            <p className={css.text}>
              To exercise your rights, contact us at:{' '}
              <a href="mailto:jarik.13a@gmail.com" className={css.link}>
                jarik.13a@gmail.com
              </a>
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>8. Cookies</h3>
            <p className={css.text}>
              We may use essential cookies required for authentication and
              session management.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>9. Children's Privacy</h3>
            <p className={css.text}>
              The Service is not intended for children under 13.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>10. Changes</h3>
            <p className={css.text}>
              We may update this policy from time to time.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>11. Contact</h3>
            <p className={css.text}>
              If you have questions, contact us at:{' '}
              <a href="mailto:jarik.13a@gmail.com" className={css.link}>
                jarik.13a@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default PrivacyPolicyPage;
