import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading, Input, FAQ } from "../../components";
// import "./styles.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ContactUsPage() {
  const [policy, setPolicy] = useState(1);
  return (
    <>
      <Helmet>
        <title>Contextify</title>
        <meta name="description" content="Term of use and Privacy policy" />
      </Helmet>
      <div className="px-48 bg-[#f7f0fc] pb-24">
        <Header />
        <ul className="flex gap-4 justify-center mt-24">
          <li
            className={` cursor-pointer underline-offset-8 font-bold ${
              policy === 1 && "underline text-blue-600"
            }`}
            onClick={() => setPolicy(1)}
          >
            Privacy Policy
          </li>
          <li className="text-[#000]">|</li>
          <li
            className={` cursor-pointer underline-offset-8 font-bold ${
              policy === 2 && "underline text-blue-600"
            }`}
            onClick={() => setPolicy(2)}
          >
            Terms of Use
          </li>
        </ul>
        {policy === 1 ? (
          <div class=" text-gray-800">
            <div class="container mx-auto p-6">
              <div class="bg-white p-8 rounded-lg shadow-md">
                <h1 class="text-3xl font-bold text-[#000] border-b-2 border-blue-600 pb-2 mb-6">
                  Privacy Policy
                </h1>
                <p class="text-sm text-gray-600 mb-6">
                  Last Updated: 12th June 2024
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  1. Introduction
                </h2>
                <p class="mt-4">
                  Welcome to Contextify. We value your privacy and are committed
                  to protecting your personal data. This Privacy Policy outlines
                  how Contextify collects, uses, discloses, and safeguards your
                  information when you use our services including our website,
                  browser extension, and any other services provided by
                  Contextify (collectively the "Services").
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  2. Information We Collect
                </h2>

                <h3 class="text-xl font-semibold mt-4">Personal Information</h3>
                <p class="mt-2">
                  We may collect personal information that you provide directly
                  to us such as:
                </p>
                <ul class="list-disc list-inside mt-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Account details (if you register for an account)</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Usage Data</h3>
                <p class="mt-2">
                  We automatically collect certain information when you use our
                  Services including:
                </p>
                <ul class="list-disc list-inside mt-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Operating system</li>
                  <li>Access times and dates</li>
                  <li>
                    Pages viewed and actions taken on our website or through our
                    browser extension
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">
                  Cookies and Similar Technologies
                </h3>
                <p class="mt-2">
                  We use cookies and similar tracking technologies to collect
                  data about your interaction with our Services to enhance your
                  user experience.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  3. How We Use Your Information
                </h2>

                <h3 class="text-xl font-semibold mt-4">
                  To Provide and Improve Services
                </h3>
                <p class="mt-2">We use your information to:</p>
                <ul class="list-disc list-inside mt-2">
                  <li>Operate, maintain, and improve our Services</li>
                  <li>Personalize your experience with our Services</li>
                  <li>Provide customer support</li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Communication</h3>
                <p class="mt-2">
                  We may use your information to communicate with you about
                  updates, promotional materials, and other information related
                  to Contextify. You can opt out of these communications at any
                  time.
                </p>

                <h3 class="text-xl font-semibold mt-4">Analytics</h3>
                <p class="mt-2">
                  We use the collected information for analytics purposes to
                  understand how our Services are used and to improve them.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  4. How We Share Your Information
                </h2>

                <h3 class="text-xl font-semibold mt-4">Service Providers</h3>
                <p class="mt-2">
                  We may share your information with third-party service
                  providers who perform services on our behalf, such as hosting,
                  data analysis, and customer service.
                </p>

                <h3 class="text-xl font-semibold mt-4">Legal Requirements</h3>
                <p class="mt-2">
                  We may disclose your information if required to do so by law
                  or in response to valid requests by public authorities.
                </p>

                <h3 class="text-xl font-semibold mt-4">Business Transfers</h3>
                <p class="mt-2">
                  In the event of a merger, acquisition, or sale of all or a
                  portion of our assets, your information may be transferred as
                  part of that transaction.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  5. Data Security
                </h2>
                <p class="mt-4">
                  We implement appropriate technical and organizational measures
                  to protect your information from unauthorized access, use, or
                  disclosure. However, no method of transmission over the
                  internet or electronic storage is 100% secure.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  6. Your Rights
                </h2>
                <p class="mt-4">
                  Depending on your jurisdiction, you may have the following
                  rights regarding your personal information:
                </p>
                <ul class="list-disc list-inside mt-2">
                  <li>
                    <strong>Access:</strong> You can request access to the
                    personal information we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> You can request that we correct
                    any inaccuracies in your personal information.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You can request that we delete
                    your personal information.
                  </li>
                  <li>
                    <strong>Restriction:</strong> You can request that we
                    restrict the processing of your personal information.
                  </li>
                  <li>
                    <strong>Portability:</strong> You can request a copy of your
                    personal information in a machine-readable format.
                  </li>
                </ul>
                <p class="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:support@contextify.info" class="text-[#000]">
                    support@contextify.info
                  </a>
                  .
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  7. Third-Party Links
                </h2>
                <p class="mt-4">
                  Our Services may contain links to third-party websites. We are
                  not responsible for the privacy practices or the content of
                  those websites. Please review the privacy policies of those
                  websites before providing any personal information.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  8. Children's Privacy
                </h2>
                <p class="mt-4">
                  Our Services are not directed to children under the age of 13.
                  We do not knowingly collect personal information from children
                  under 13. If we become aware that we have collected personal
                  information from a child under 13, we will take steps to
                  delete such information.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  9. Changes to This Privacy Policy
                </h2>
                <p class="mt-4">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  our website. You are advised to review this Privacy Policy
                  periodically for any changes.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  10. Contact Us
                </h2>
                <p class="mt-4">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <p class="mt-2">
                  Email:{" "}
                  <a href="mailto:support@contextify.info" class="text-[#000]">
                    support@contextify.info
                  </a>
                </p>

                <p class="mt-6 font-semibold">Contextify Team</p>
              </div>
            </div>
          </div>
        ) : (
          <div class=" text-gray-800">
            <div class="container mx-auto p-6">
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <h1 class="text-3xl font-bold text-[#000] border-b-2 border-blue-600 pb-2 mb-6">
                  Terms of Use
                </h1>
                <p class="text-sm text-gray-600 mb-6">
                  Last Updated: 12th June 2024
                </p>

                <p>
                  Welcome to Contextify! By using our website, browser
                  extension, and any related services (collectively the
                  "Services"), you agree to comply with and be bound by these
                  Terms of Use. Please read them carefully. If you do not agree
                  with any part of these terms, you must not use our Services.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  1. Acceptance of Terms
                </h2>
                <p class="mt-4">
                  By accessing or using Contextify, you agree to be bound by
                  these Terms of Use and our Privacy Policy. If you are using
                  the Services on behalf of an organization, you are agreeing to
                  these terms for that organization and confirming that you have
                  the authority to bind the organization to these terms.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  2. Description of Services
                </h2>
                <p class="mt-4">
                  Contextify provides a platform that integrates a browser
                  extension for running web searches on text and images without
                  leaving the current tab, offers audio search results, and
                  provides contextual information for a better understanding of
                  the internet. The Services also include features for
                  self-analysis of online activity.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  3. Use of Services
                </h2>

                <h3 class="text-xl font-semibold mt-4">Eligibility</h3>
                <p class="mt-2">
                  You must be at least 13 years old to use our Services. By
                  using the Services, you represent and warrant that you meet
                  this age requirement.
                </p>

                <h3 class="text-xl font-semibold mt-4">User Conduct</h3>
                <p class="mt-2">
                  You agree to use the Services only for lawful purposes and in
                  accordance with these Terms of Use. You agree not to:
                </p>
                <ul class="list-disc list-inside mt-2">
                  <li>
                    Use the Services in any way that violates any applicable
                    local, state, national, or international law or regulation.
                  </li>
                  <li>
                    Engage in any conduct that restricts or inhibits anyone's
                    use or enjoyment of the Services or which, as determined by
                    us, may harm Contextify or users of the Services.
                  </li>
                  <li>
                    Use the Services to exploit, harm, or attempt to exploit or
                    harm minors in any way.
                  </li>
                  <li>
                    Impersonate or attempt to impersonate Contextify, a
                    Contextify employee, another user, or any other person or
                    entity.
                  </li>
                  <li>
                    Use any device, software, or routine that interferes with
                    the proper working of the Services.
                  </li>
                </ul>

                <h3 class="text-xl font-semibold mt-4">Account Security</h3>
                <p class="mt-2">
                  If you create an account, you must provide accurate and
                  complete information and keep your account information
                  updated. You are responsible for maintaining the
                  confidentiality of your account and password and for
                  restricting access to your computer. You agree to accept
                  responsibility for all activities that occur under your
                  account or password.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  4. Intellectual Property
                </h2>

                <h3 class="text-xl font-semibold mt-4">Ownership</h3>
                <p class="mt-2">
                  The Services and their entire contents, features, and
                  functionality (including but not limited to all information,
                  software, text, displays, images, video, and audio, and the
                  design, selection, and arrangement thereof) are owned by
                  Contextify, its licensors, or other providers of such material
                  and are protected by international copyright, trademark,
                  patent, trade secret, and other intellectual property or
                  proprietary rights laws.
                </p>

                <h3 class="text-xl font-semibold mt-4">Limited License</h3>
                <p class="mt-2">
                  Contextify grants you a limited, non-exclusive,
                  non-transferable, and revocable license to access and use the
                  Services for your personal, non-commercial use. This license
                  is subject to these Terms of Use and does not include any
                  right to:
                </p>
                <ul class="list-disc list-inside mt-2">
                  <li>
                    Resell or make any commercial use of the Services or the
                    content;
                  </li>
                  <li>
                    Modify, reproduce, distribute, or create derivative works
                    based on the Services or the content;
                  </li>
                  <li>
                    Use any data mining, robots, or similar data gathering or
                    extraction methods.
                  </li>
                </ul>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  5. Privacy
                </h2>
                <p class="mt-4">
                  Your use of the Services is also governed by our Privacy
                  Policy. Please review our Privacy Policy for information on
                  how we collect, use, and share your information.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  6. Termination
                </h2>
                <p class="mt-4">
                  We reserve the right to terminate or suspend your access to
                  all or part of the Services at any time without notice for any
                  reason, including without limitation any violation of these
                  Terms of Use. Upon termination, your right to use the Services
                  will immediately cease.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  7. Disclaimer of Warranties
                </h2>
                <p class="mt-4">
                  The Services are provided on an "as is" and "as available"
                  basis without any warranties of any kind, either express or
                  implied, including but not limited to implied warranties of
                  merchantability, fitness for a particular purpose, or
                  non-infringement. Contextify does not warrant that the
                  Services will be uninterrupted or error-free, that defects
                  will be corrected, or that the Services or the servers that
                  make them available are free of viruses or other harmful
                  components.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  8. Limitation of Liability
                </h2>
                <p class="mt-4">
                  To the fullest extent permitted by applicable law, in no event
                  will Contextify, its affiliates, or their licensors or service
                  providers be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including but not limited
                  to loss of profits, data, use, goodwill, or other intangible
                  losses resulting from:
                </p>
                <ul class="list-disc list-inside mt-2">
                  <li>Your use or inability to use the Services;</li>
                  <li>
                    Any unauthorized access to or use of our servers and/or any
                    personal information stored therein;
                  </li>
                  <li>
                    Any interruption or cessation of transmission to or from the
                    Services;
                  </li>
                  <li>
                    Any bugs, viruses, trojan horses, or the like which may be
                    transmitted to or through the Services by any third party;
                  </li>
                  <li>
                    Any errors or omissions in any content or for any loss or
                    damage incurred as a result of the use of any content
                    posted, emailed, transmitted, or otherwise made available
                    through the Services.
                  </li>
                </ul>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  9. Governing Law and Jurisdiction
                </h2>
                <p class="mt-4">
                  These Terms of Use and any dispute or claim arising out of or
                  related to them shall be governed by and construed in
                  accordance with the internal laws of the state in which
                  Contextify is headquartered without giving effect to any
                  choice or conflict of law provision or rule. Any legal suit,
                  action, or proceeding arising out of or related to these Terms
                  of Use or the Services shall be instituted exclusively in the
                  federal courts of the United States or the courts of the state
                  in which Contextify is headquartered.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  10. Changes to Terms of Use
                </h2>
                <p class="mt-4">
                  We reserve the right to modify or update these Terms of Use at
                  any time. Any changes will be effective immediately upon
                  posting the revised Terms of Use on our website. Your
                  continued use of the Services following the posting of revised
                  Terms of Use means that you accept and agree to the changes.
                  We encourage you to review these Terms of Use periodically to
                  stay informed about our updates.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  11. Contact Information
                </h2>
                <p class="mt-4">
                  If you have any questions or concerns about these Terms of
                  Use, please contact us at:
                </p>
                <p class="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:support@contextify.info"
                    class="text-blue-500 underline"
                  >
                    support@contextify.info
                  </a>
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  12. Miscellaneous
                </h2>

                <h3 class="text-xl font-semibold mt-4">Entire Agreement</h3>
                <p class="mt-2">
                  These Terms of Use and our Privacy Policy constitute the sole
                  and entire agreement between you and Contextify regarding the
                  Services and supersede all prior and contemporaneous
                  understandings, agreements, representations, and warranties,
                  both written and oral, regarding the Services.
                </p>

                <h3 class="text-xl font-semibold mt-4">Severability</h3>
                <p class="mt-2">
                  If any provision of these Terms of Use is held to be invalid,
                  illegal, or unenforceable for any reason, the remaining
                  provisions will continue in full force and effect. The
                  invalid, illegal, or unenforceable provision will be deemed
                  modified so that it is valid and enforceable to the maximum
                  extent permitted by law.
                </p>

                <h3 class="text-xl font-semibold mt-4">Waiver</h3>
                <p class="mt-2">
                  No waiver of any term or condition set forth in these Terms of
                  Use shall be deemed a further or continuing waiver of such
                  term or condition or a waiver of any other term or condition,
                  and any failure of Contextify to assert a right or provision
                  under these Terms of Use shall not constitute a waiver of such
                  right or provision.
                </p>

                <h3 class="text-xl font-semibold mt-4">Assignment</h3>
                <p class="mt-2">
                  Contextify may assign its rights and obligations under these
                  Terms of Use to any party at any time without notice to you.
                  You may not assign your rights or obligations under these
                  Terms of Use without our prior written consent.
                </p>

                <h3 class="text-xl font-semibold mt-4">Headings</h3>
                <p class="mt-2">
                  The section headings used herein are for convenience only and
                  shall not be given any legal import.
                </p>

                <h2 class="text-2xl font-semibold text-[#000] mt-6">
                  13. Feedback
                </h2>
                <p class="mt-4">
                  We welcome your feedback and suggestions about how to improve
                  Contextify. You agree that Contextify will be free to use any
                  feedback or suggestions you provide for any purpose without
                  any obligation to you.
                </p>

                <p class="mt-6">
                  By using Contextify, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Use.
                </p>

                <p class="mt-6 font-semibold">Contextify Team</p>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
