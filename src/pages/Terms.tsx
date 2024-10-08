import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Terms = () => {

  return (
    <DefaultLayout>
  <section className="relative pt-35 pb-17.5 sm:pb-22.5 sm:pt-40 xl:pt-45 xl:pb-27.5">
  <span className="custom-gradient-5 dark:dark-gradient-3 absolute bottom-14 -z-1 block h-full w-full" />
  <div className="mx-auto max-w-292.5 px-4 sm:px-8 xl:px-0">
    <div className="animate_bottom text-center">
      <h1 className="mb-2.5 text-3xl font-bold text-black dark:text-white sm:text-title-3 xl:text-custom-xl">
        Ad Collector Privacy Policy
      </h1>
         <p className="font-medium py-5">
                LIX and CNRS are very attentive and vigilant regarding personal data protection (DCP) issues. CNRS has appointed a Data Protection Officer (DPO) to ensure that labs such as LIX comply with the European General Data Protection Regulation (GDPR).
              </p>
    </div>
    <div className="animate_bottom mt-10">
   
              <h4 className="mb-4 text-title-sm2 font-bold text-black dark:text-white">
                Data Collection
              </h4>
              <p className="font-medium">
                We collect data related to advertisements the user receives on YouTube by watching videos on this platform. This includes:
              </p>
              <ul className="list-disc pl-5 py-5">
                <li>Information about the ads users see when watching YouTube, including Video ads and Cards ads.</li>
                <li>Details such as advertisement video ID, advertiser's links, and any information concerning his YouTube channel, if available.</li>
                <li>The link to the service/product offered by the ads and the date/time when the ad appeared.</li>
                <li>Reasons for which an advertisement is sent to a user and the user's behavior towards the advertisement, including if the user has skipped or clicked the advertisement.</li>
                <li>Information from the Google Ad Preference Page that presents what the platform has inferred about the user.</li>
                <li>Details about the videos the user views including URL, title, description, tags, views, and details about the YouTube channel.</li>
                <li>The user's interaction with YouTube, whether logged into a Gmail account or using YouTube without an account, and the user's country.</li>
              </ul>
              <h4 className="mb-4 text-title-sm2 font-bold text-black dark:text-white">
                Special Category Data
              </h4>
              <p className="font-medium pb-5">
                Data collected might reveal sensitive information relating to a user's racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, health, criminal convictions, sex life or sexual orientation, or genetic or biometric data.
              </p>
              <h4 className="mb-4 text-title-sm2 font-bold text-black dark:text-white">
                Data Security and Access
              </h4>
              <p className="font-medium">
                The collected data will be stored on a dedicated secured server and provided to academic researchers upon justified request. Access will be granted through an authentication process once their request is validated.
              </p>
              <p className="font-medium">
                In accordance with Article 13 of the GDPR, the representative of the data controller is the director of the LIX lab, Mr. Gilles Schaeffer.
              </p>
              <p className="font-medium">
                For more details, please visit the official GDPR regulation page.
                <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                  EU GDPR Information
                </a>.
              </p>
    </div>
  </div>
</section>


    </DefaultLayout>
  );
};

export default Terms;
