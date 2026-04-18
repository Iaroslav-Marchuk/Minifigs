import Container from '../../components/Container/Container.jsx';
import Section from '../../components/Section/Section.jsx';

import css from './TermsOfServicePage.module.css';

function TermsOfServicePage() {
  return (
    <Section>
      <Container>
        <div className={css.wrapper}>
          <h2 className={css.title}>Terms of Service</h2>
          <p className={css.updated}>Last updated: 18/04/2026</p>

          <p className={css.intro}>
            By using this Service, you agree to these Terms.
          </p>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>1. Use of the Service</h3>
            <p className={css.text}>
              The Service allows users to manage and organize their mini-figure
              collections. You agree to use the Service only for lawful
              purposes.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>2. Account</h3>
            <p className={css.text}>
              To use certain features, you must create an account. You are
              responsible for:
            </p>
            <ul className={css.list}>
              <li>Maintaining the confidentiality of your account</li>
              <li>All activity under your account</li>
            </ul>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>3. Authentication</h3>
            <p className={css.text}>You may sign in using:</p>
            <ul className={css.list}>
              <li>Email and password</li>
              <li>Google authentication</li>
            </ul>
            <p className={css.text}>
              You agree to provide accurate information.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>4. User Data</h3>
            <p className={css.text}>
              You retain ownership of the data you create in the Service.
              However, you grant us the right to store and process it to operate
              the Service.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>5. Prohibited Activities</h3>
            <p className={css.text}>You agree not to:</p>
            <ul className={css.list}>
              <li>Use the Service for illegal purposes</li>
              <li>Attempt to hack or disrupt the Service</li>
              <li>Abuse or overload the system</li>
            </ul>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>6. Termination</h3>
            <p className={css.text}>
              We may suspend or terminate your account if you violate these
              Terms. You may delete your account at any time.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>7. Disclaimer</h3>
            <p className={css.text}>
              The Service is provided "as is" without warranties of any kind.
            </p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>8. Limitation of Liability</h3>
            <p className={css.text}>We are not liable for:</p>
            <ul className={css.list}>
              <li>Data loss</li>
              <li>Service interruptions</li>
              <li>Any indirect damages</li>
            </ul>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>9. Changes</h3>
            <p className={css.text}>We may update these Terms at any time.</p>
          </div>

          <div className={css.section}>
            <h3 className={css.sectionTitle}>10. Contact</h3>
            <p className={css.text}>
              For questions, contact:{' '}
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

export default TermsOfServicePage;
