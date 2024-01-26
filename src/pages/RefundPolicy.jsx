import Wrapper from '../components/Wrapper'

const RefundPolicy = () => {
  return (
    <Wrapper>
      <section className='my-32'>
        <header className='mb-14 space-y-3 text-center lg:text-start'>
          <h3 className=' text-2xl font-bold text-zinc-800 md:text-3xl lg:text-5xl '>
            Piscal Innovations Refund Policy
          </h3>
          <time dateTime='2023-11-06' className='italic'>
            Effective Date: [06/11/2023]
          </time>
        </header>
        <article className='space-y-8'>
          <p>
          At Piscal Innovations, we are committed to delivering top-tier IT consulting services while maintaining trust and satisfaction among our clientele. Understanding the potential need for refunds, we&apos;ve established a transparent and fair refund policy. Please review the terms and conditions below, outlining our process:
          </p>
          <ol className='list-decimal space-y-8'>
            <li className=''>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Eligibility for Refund:
                </h4>
                <ul className='space-y-2 '>
                  <li className=''>
                    1.1. Refunds apply only to services directly purchased from us.
                  </li>
                  <li>
                    1.2. To qualify for a refund, clients must contact our customer support team within 30 days of the initial purchase to initiate the process.
                  </li>
                  <li>
                    1.3. Please note, refunds are not applicable to fully delivered and completed services, signifying the fulfillment of agreed-upon contractual obligations.
                  </li>
                </ul>
              </section>
            </li>

            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Refund Request Process:
                </h4>
                <p className=''>
                  2.1. To commence a refund request, kindly reach out to our customer support team via email at
                  <a className='text-blue-800' href='mailto:support@piscalinnovations.com'>
                    email
                  </a>
                  .
                </p>
                <p className=''>
                  2.2. When requesting a refund, ensure you provide:
                </p>
                <ul className='list-disc  space-y-2'>
                  <li>Your full name</li>
                  <li>Contact information</li>
                  <li>Details of the purchased service(s)</li>
                  <li>A comprehensive reason for the refund request</li>
                </ul>
              </section>
            </li>
            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Refund Review and Approval:
                </h4>
                <p>
                  3.1.Upon receiving your refund request, our dedicated team will thoroughly assess its eligibility.
                </p>
                <p>
                  3.2.  Approved refunds aim to be processed within a reasonable time frame, typically within [7] business days from approval. 
                </p>
                <p>
                  3.3. Refunds will be issued using the original payment method. Please note that processing times by financial institutions may vary.
                </p>
              </section>
            </li>
            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Exceptions to Refund Policy:
                </h4>
                <p className=''>
                  4.1. While our policy endeavors to be fair, <a href="" className='text-blue-600 underline text-2xl'>company name (without any a tag)</a>  reserves the right to refuse or limit refunds in specific circumstances:
                </p>
                <ul className='list-disc  space-y-2'>
                  <li>
                  Refunds may be declined if considerable value has been provided or substantial resources have been invested.
                  </li>
                  <li>
                    Misuse of refund policy: We are committed to maintaining the integrity of our
                    refund policy. In cases where clients attempt to abuse the policy by repeatedly
                    requesting refunds without valid reasons, we may refuse refunds.
                  </li>
                </ul>
              </section>
            </li>
            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Cancellation and Termination of Services:
                </h4>
                <p>
                  5.1. To cancel a pending service, promptly contact our customer support team.
                </p>
                <p>
                  5.2. If a service is cancelled before initiation, efforts will be made to provide a full refund.
                </p>
              </section>
            </li>
            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Changes to the Refund Policy:
                </h4>
                <p>
                  6.1. Our refund policy is subject to change, and we may update it from time to
                  time to ensure it remains aligned with the evolving needs of our business and the
                  expectations of our clients.
                </p>
                <p>
                  6.2. We recommend that you periodically review this policy to stay informed about
                  any changes that may have been made. We will ensure that the most current version
                  of our refund policy is available on our website for your reference.
                </p>
              </section>
            </li>
            <li>
              <section className='space-y-2 text-zinc-700'>
                <h4 className='w-fit border-b-[1px] border-b-black text-xl font-semibold'>
                  Contact Information:
                </h4>
                <p>
                  If you have any questions or concerns regarding our refund policy or the refund
                  process, please do not hesitate to contact our customer support team. You can
                  reach us at{" "}
                  <a className='text-blue-800' href='mailto:support@piscalinnovations.com'>
                    support@piscalinnovations.com
                  </a>
                   We&apos;re dedicated to assisting you with any refund-related inquiries or issues.
                </p>
              </section>
            </li>
          </ol>
        </article>
      </section>
    </Wrapper>
  )
}

export default RefundPolicy