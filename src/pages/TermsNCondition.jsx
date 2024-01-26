import React from "react";
import Wrapper from "../components/Wrapper";

const TermsNCondition = () => {
  return (
    <Wrapper>
      <section className='my-20'>
        <header className='mb-14 space-y-3 text-center lg:text-start'>
          <h3 className=' text-2xl font-bold text-zinc-800 md:text-3xl lg:text-5xl'>
            <span className="text-blue-600 font-semibold underline">Company name</span> Terms & Conditions
          </h3>
          <time dateTime='2023-07-06' className='italic'>
            Effective Date: [06/07/2023]
          </time>
        </header>

        {/* <-- Table of contents --> */}
        <div className='space-y-8 text-zinc-700'>
          <h3 className='text-xl font-semibold text-zinc-700'>Table of Contents</h3>
          <ol className='space-y-8'>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>1. Introduction</a>
              <ol className='space-y-2'>
                <li>
                  <a>1.1. Acknowledgment of Terms & Conditions</a>
                </li>
                <li>
                  <a>1.2. Definitions</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>2. Service Description</a>
              <ol>
                <li>
                  <a>2.1. Scope of Services</a>
                </li>
                <li>
                  <a>2.2. Pricing and Payment Terms </a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>3. Client Responsiblities</a>
              <ol className=''>
                <li>
                  <a>3.1. Provision of Accurate Information</a>
                </li>
                <li>
                  <a>3.2. Adherence of Project Timelines</a>
                </li>
                <li>
                  <a>3.3. Third-Party Costs</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>4. Refund Policy</a>
              <ol>
                <li>
                  <a>4.1. Eligibility for Refunds</a>
                </li>
                <li>
                  <a>4.2. Initiating a Refund Request</a>
                </li>
                <li>
                  <a>4.3. Refund Process</a>
                </li>
                <li>
                  <a>4.4. Exceptions to Refund Policy</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>5. Intellectual Property</a>
              <ol>
                <li>
                  <a>5.1. Ownership</a>
                </li>
                <li>
                  <a>5.2. Use and Distribution</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>6. Confidentiality</a>
              <ol>
                <li>
                  <a>6.1. Data Privacy</a>
                </li>
                <li>
                  <a>6.2. Confidential Information</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>7. Termination of Service</a>
              <ol>
                <li>
                  <a href='#termination-rights'>7.1. Termination Rights</a>
                </li>
                <li>
                  <a href='#consequences-termination'>7.2. Consequences of Termination</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>8. Dispute Resolution</a>
              <ol>
                <li>
                  <a href='#good-faith-resolution'>8.1. Resolution Attempts</a>
                </li>
                <li>
                  <a href='#arbitration-legal-action'>8.2. Arbitration or Legal Action</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>9. Limitation of Liability</a>
              <ol>
                <li>
                  <a>9.1. Liability Limitations</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>10. Amendments to Terms & Conditions</a>
              <ol>
                <li>
                  <a href='#updates-notification'>10.1. Updates and Notification</a>
                </li>
              </ol>
            </li>
            <li className='space-y-2'>
              <a className='text-lg font-semibold'>11. Contact Information</a>
              <ol>
                <li>
                  <a href='#customer-support'>11.1. Customer Support</a>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <article className='space-y-8'>
          <p>
          By choosing <span className="text-blue-500 underline font-semibold">company name</span> and utilizing our services, you indicate your understanding, acceptance, and agreement to these specified terms and conditions. This legal agreement establishes the relationship between you (referred to as the {"client"}) and <span className="text-blue-600 font-semibold underline">Company name</span> (referred to as the {"company"}). Should you disagree with any part of these terms, refrain from using our services.
          </p>
          <ol className='list-decimal space-y-8'>
            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Introduction
                </h4>
                <ul className='space-y-3'>
                  <li className="space-y-2">
                    <h4 className='text-lg font-semibold'>1.1 Acceptance of Terms & Conditions.</h4>
                    <p>
                    By choosing <span className="text-blue-600 font-semibold underline">Company name</span> and utilizing our services, you indicate your understanding, acceptance, and agreement to these specified terms and conditions. This legal agreement establishes the relationship between you (referred to as the {"client"}) and <span className="text-blue-600 font-semibold underline">Company name</span> (referred to as the {"company"}). Should you disagree with any part of these terms, refrain from using our services.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>1.2 Definitions</h4>
                    <p>The term {"Client"} denotes any individual, entity, or organization engaging <span className="text-blue-600 font-semibold underline">Company name</span> for services. <span className="text-blue-600 font-semibold underline">Company name</span> represents the IT consultancy offering services in IT Consulting, IT Staff Augmentation, and Digital Marketing. {"Services"} encompass the array of solutions offered by <span className="text-blue-600 font-semibold underline">Company name</span>, detailed on our website and in official communications.</p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Service Description
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>2.1 Scope of Services</h4>
                    <p>
                    <span className="text-blue-600 font-semibold underline">Company name</span> extends IT Consulting, IT Staff Augmentation, and Digital Marketing services. Specifics regarding service scope, pricing, and details are outlined in the contractual agreement between <span className="text-blue-600 font-semibold underline">Company name</span> and the client. Service fees may vary based on project intricacies.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>2.2 Pricing and Payment Terms</h4>
                    <p>
                    Service costs are explicitly detailed in the contract, potentially incorporating upfront deposits, milestone payments, or final payments upon project completion. Adhering to outlined payment terms is the client&apos;s responsibility. Untimely payments may impact service delivery timelines or result in contract termination.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Client Responsibilities
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>3.1 Provision of Accurate Information</h4>
                    <p>
                    Clients are expected to furnish precise and complete information facilitating service delivery. Any inaccuracies or omissions might affect service quality and timeliness.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>3.2 Adherence to Project Timelines</h4>
                    <p>
                    Clients must honor project timelines agreed upon in the service contract. Client-induced delays may affect project schedules, leading to additional costs.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>3.3 Third-Party Costs</h4>
                    <p>
                    Clients are liable for any third-party fees or expenses related to the project, unless otherwise specified in the service contract.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Refund Policy
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>4.1 Eligibility for Refunds</h4>
                    <p>
                    Refunds are applicable solely to services directly procured from <span className="text-blue-600 font-semibold underline">Company name</span>. To qualify for a refund, clients should contact our customer support within 30 days from the initial purchase. Refunds aren&apos;t available for fully delivered and completed services.

                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>4.2 Initiating a Refund Request </h4>
                    <p>
                    To initiate a refund, clients should reach out to our customer support team via email at [support@piscalinnovations.com]. In the refund request, furnish your full name, contact details, a precise description of purchased service(s), and a detailed explanation for the refund.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>4.3 Refund Process</h4>
                    <p>
                      {" "}
                      Upon receiving a refund request, our dedicated team reviews it to ascertain compliance with this policy. Approved refunds are processed within a reasonable timeframe, usually [X] business days from approval. Refunds use the original payment method, subject to financial institutions&apos; processing times.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>4.4 Exceptions to Refund Policy</h4>
                    <p>
                      {" "}
                      <span className="text-blue-600 font-semibold underline">Company name</span> reserves the right to refuse or limit refunds in specific situations, such as substantially delivered services or suspected misuse of the refund policy.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Intellectual Property
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>5.1 Ownership</h4>
                    <p>
                    Intellectual property developed or provided by <span className="text-blue-600 font-semibold underline">Company name</span> during projects remains our property unless otherwise stated in the service contract.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>5.2. Usage and Distribution</h4>
                    <p>
                    Clients mustn&apos;t use or distribute <span className="text-blue-600 font-semibold underline">Company name</span>&apos; intellectual property without prior written consent. Unauthorized usage or distribution may lead to legal action.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Confidentiality
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>6.1. Data Privacy</h4>
                    <p>
                    Our commitment is to uphold client data privacy and security. Our practices are governed by our Privacy Policy.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>6.2. Confidential Information</h4>
                    <p>
                    Clients are required to maintain confidentiality regarding sensitive information shared by <span className="text-blue-600 font-semibold underline">Company name</span> during the project. Unauthorized disclosure may lead to legal repercussions.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Termination of Service
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>7.1. Termination Rights</h4>
                    <p>
                    Both <span className="text-blue-600 font-semibold underline">Company name</span> and the client possess the right to terminate a service contract under conditions stipulated within the agreement. Termination rights may include termination for convenience or specific breach of contract.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>7.2. Consequences of Termination</h4>
                    <p>
                    Post-termination, clients may be liable for outstanding payments and additional outlined costs. <span className="text-blue-600 font-semibold underline">Company name</span> may retain ownership of project deliverables.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Dispute Resolution
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>8.1. Resolution Attemps</h4>
                    <p>
                    In case of dispute, both parties commit to resolving it amicably through negotiation and mediation. Mediation, if necessary, may involve a mutually agreed-upon third party.
                    </p>
                  </li>
                  <li>
                    <h4 className='text-lg font-semibold'>8.2. Arbitration or Legal Action</h4>
                    <p>
                    If resolution efforts fail, disputes may be subject to arbitration or legal action as per the service contract provisions.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Limitation of Liability
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>9.1. Liability Limitations </h4>
                    <p>
                    <span className="text-blue-600 font-semibold underline">Company name</span> liability for service-related claims is capped at the total client payment for those services. We aren&apos;t liable for consequential, indirect, or punitive damages.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Amendments to Terms & Conditions
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>10.1. Updates and Notification</h4>
                    <p>
                    We reserve the right to update these terms and conditions. Clients will be notified of changes, and it&apos;s their responsibility to review and comply with the most recent version accessible on our website.

                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Contact Information
                </h4>
                <ul className='space-y-2'>
                  <li>
                    <h4 className='text-lg font-semibold'>11.1. Customer Support</h4>
                    <p>
                    For queries or concerns about our terms and conditions, contact our customer support team at
                      <a href='mailto:support@piscalinnovations.com'>
                        support@piscalinnovations.com
                      </a>{" "}
                      . We are dedicated to providing the information and assistance needed for inquiries or issues related to our services.
                    </p>
                  </li>
                </ul>
              </section>
            </li>

            <p>
            By engaging with <span className="text-blue-600 font-semibold underline">Company name</span>, you acknowledge agreement to these terms and conditions. These terms are subject to change, and its your responsibility to stay updated on updates.
            </p>
          </ol>
        </article>
      </section>
    </Wrapper>
  );
};

export default TermsNCondition;
