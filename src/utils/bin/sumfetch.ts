import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
      return `
                     ./o.                   Summary display
                   ./sssso-                --------------------
                  :osssssss+-               ABOUT
                :+sssssssssso/.             ${config.name}
              -/ossssssssssssso/.           <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
            -/+sssssssssssssssso+:         爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
          -:/+sssssssssssssssssso+/.       -----------
        .://osssssssssssssssssssso++-       CONTACT
      .://+ssssssssssssssssssssssso++:      <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    .:///ossssssssssssssssssssssssso++:     <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   :////ssssssssssssssssssssssssssso+++.    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 -////+ssssssssssssssssssssssssssso++++-   -----------
  ..-+oosssssssssssssssssssssssso+++++/     DONATE
   ./++++++++++++++++++++++++++++++/:.      <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
   :::::::::::::::::::::::::------          <u><a href="${config.donate_urls.ko_fi}" target="_blank">${config.donate_urls.ko_fi}</a></u>
                                            My daily driver: EndeavourOS Linux

`
};

export default sumfetch;