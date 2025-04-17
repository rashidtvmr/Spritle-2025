
    const timelineContainer = document.querySelector(
    ".flex.flex-col.md\\:grid.grid-cols-9.mx-auto.p-2",
    );
    const timelineItems = [
    {
        image: "/assets/timeline1.svg",
    title: "Discuss, Figure Out, and Implement Your Project!",
    headings: [
    {
        heading: "Scope Definition",
    subheading:
    "Understanding the business vision, goals and objectives.",
              },
    {
        heading: "Analysis",
    subheading:
    "Analyzing the elicited solution ideas, business, user, functionality.",
              },
    {
        heading: "Documentation",
    subheading:
    "We provide prototypes for identifying opportunities to improve.",
              },
    {
        heading: "Validation",
    subheading:
    "Understanding the business vision, goals and objectives.",
              },
    {
        heading: "Scope Definition",
    subheading:
    "Prototype and test case elicitation is the key to continual development",
              },
    ],
          },
    {
        image: "/assets/timeline2.svg",
    title:
    "Get Your App Features Nailed in a Modernistic Wireframe and UX Design!",
    headings: [
    {
        heading: "Wireframes",
    subheading:
    "Understanding the business vision, goals and objectives.",
              },
    {
        heading: "Graphic Mock-ups",
    subheading:
    "Analyzing the elicited solution ideas, business, user, functionality.",
              },
    {
        heading: "Prototype",
    subheading:
    "We provide prototypes for identifying opportunities to improve.",
              },
    {
        heading: "Proof-of-Concept",
    subheading:
    "Building alpha versions for evaluation and validation with all stakeholders.",
              },
    ],
          },
    {
        image: "/assets/timeline3.svg",
    title: "Entrance Your Users With the Best Visual Design!",
    headings: [
    {
        heading: "Draft Visual Design",
    subheading:
    "Our designers bring your branding and identity to your applications.",
              },
    {
        heading: "Feedback and Refine Design",
    subheading:
    "Based on the established brand concept provided by the client.",
              },
    {
        heading: "Select the Final Version",
    subheading:
    "We follow a highly transparent iterative approach to flexible design.",
              },
    ],
          },
    {
        image: "/assets/timeline4.svg",
    title:
    "Join Forces With Us for Building Your Project From Scratch!",
    headings: [
    {
        heading: "Initial Estimation",
    subheading:
    "We prepare an estimation based on features and your vision.",
              },
    {
        heading: "Choosing a Team and Technologies",
    subheading:
    "Once we know the client’s needs, we typically proceed to have teams.",
              },
    {
        heading: "Scrum Process and Iterative Development",
    subheading:
    "We follow a scrum process that keeps the client up-to-date.",
              },
    {
        heading: "Custom and Legacy Application Development",
    subheading:
    "Be it a first-of-a-kind ERP, a start-up idea or your existing IT infrastructure.",
              },
    ],
          },
    {
        image: "/assets/timeline5.svg",
    title:
    "Never Worry About Your Existing Systems In Place. Our Systems Seamlessly Collaborate With Yours!",
    headings: [
    {
        heading: "Backend Integration",
    subheading:
    "Depending on your needs, our experts can create a consolidated.",
              },
    {
        heading: "Data Integration",
    subheading:
    "We integrate data sources across dispersed IT environments.",
              },
    {
        heading: "API-Based Integration",
    subheading:
    "We piggyback on third party services’ APIs so that you can.",
              },
    {
        heading: "Custom API Development",
    subheading:
    "Leveraging on the Rails API to facilitate the implementation of custom integration.",
              },
    ],
          },
    {
        image: "/assets/timeline6.svg",
    title:
    "We Build Quality Into Your Product and Application Delivery Lifecycle at Any Stage Of Your Project By Constantly Testing!",
    headings: [
    {
        heading: "Full-Cycle Testing",
    subheading:
    "We render QA and testing services along throughout the whole development lifecycle.",
              },
    {
        heading: "Automated Testing",
    subheading:
    "We test the reliability, compatibility and performance.",
              },
    {
        heading: "Project Rescue",
    subheading:
    "We are well-skilled at rescuing mid-lifecycle projects.",
              },
    {
        heading: "User Acceptance Testing",
    subheading:
    "A hands-on run on the app is the best way to experience the functions and usability.",
              },
    ],
          },
    {
        image: "/assets/timeline7.svg",
    title:
    "We Don’t Walk Away Until Your Business Is Set. We Stay Till the System Solves Your Purpose!",
    headings: [
    {
        heading: "Task/Bug Tracking Systems",
    subheading:
    "We value reporting and identifying defects into account.",
              },
    {
        heading: "Software Maintenance and Proactive Support",
    subheading:
    "Our proactive approach lets us warn the customer if a backup is needed.",
              },
    {
        heading: "Application Improvement and Customization",
    subheading:
    "Our support engineers revise the application’s current state.",
              },
    {
        heading: "Support and Enhancement",
    subheading:
    "Providing continuous enhancement support to make the app evolve through usage feedback.",
              },
    ],
          },
    ];
        timelineItems.forEach((item, index) => {
          const isEven = index % 2 === 0;
    const timelineItem = `
    <div class="${isEven ? " flex flex-row-reverse md:contents" : "flex md:contents"}">
    ${
        isEven
            ? ` 
                <div class="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                  <!-- Card -->
                  <div class="w-full 2xl:w-[650px] lg:w-fit h-auto xl:h-[960.495px] rounded-[20px] border border-gray-300 p-[20px] md:p-[40px_20px] flex flex-col gap-4 bg-[#313131]">
                    <!-- Image -->
                    <div class="flex justify-center">
                      <img src="${item.image}" alt="Image" class="w-[200px] h-[225px] md:w-[329.438px] md:h-[370.628px]" />
                    </div>
                    <!-- Title Below Image -->
                    <h3 class="font-medium text-center text-xl md:text-2xl lg:text-3xl text-primary mt-4">${item.title}</h3>
                    <!-- Content Below Image -->
                    <div class="px-4 md:px-8 lg:px-13 py-4 gap-3 flex flex-col items-start">
                      ${item.headings
                .map(
                    (heading) => `
                        <div class="flex items-start gap-2">
                          <img src="/assets/tick.svg" alt="Tick" class="w-4 h-4 md:w-5 md:h-5" />
                          <div class="text-left">
                            <h3 class="font-medium text-primary text-sm md:text-subheading">${heading.heading}</h3>
                            <p class="text-secondary font-medium text-xs md:text-base mt-0">${heading.subheading}</p>
                          </div>
                        </div>
                      `,
                )
                .join("")}
                    </div>
                  </div>
                </div>`
            : ""
    }

    <!-- Center Line with Blue Ball -->
    <div class="col-start-5 col-end-6 md:mx-auto relative flex items-center justify-center">
        <div class="h-full w-6 flex items-center justify-center">
            <div class="h-full w-[8px] bg-[#15AED5] pointer-events-none"></div>
        </div>
        <div class="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-[#15AED5] rounded-full bg-[#15AED5] shadow"></div>
    </div>


    ${
        !isEven
            ? ` 
                <div class="w-full col-start-6 col-end-10 my-4 mr-auto p-4">
                  <!-- Card -->
                  <div class="w-full xl:w-[650px] h-auto xl:h-[960.495px] rounded-[20px] border border-gray-300 p-[20px] md:p-[40px_20px] flex flex-col bg-[#313131] ">
                    <!-- Image -->
                    <div class="flex justify-center">
                      <img src="${item.image}" alt="Image" class="w-[200px] h-[225px] md:w-[329.438px] md:h-[370.628px]" />
                    </div>
                    <!-- Title Below Image -->
                    <h3 class="max-w-[505px] mx-auto font-medium text-center text-xl md:text-2xl lg:text-3xl text-primary mt-4">${item.title}</h3>
                    <!-- Content Below Image -->
                    <div class="px-4 md:px-8 lg:px-13 py-4 gap-3 mx-auto flex flex-col items-start">
                      ${item.headings
                .map(
                    (heading) => `
                        <div class="flex items-start gap-2">
                          <img src="/assets/tick.svg" alt="Tick" class="w-4 h-4 md:w-5 md:h-5" />
                          <div class="text-left">
                            <h3 class="font-medium text-primary text-sm md:text-subheading">${heading.heading}</h3>
                            <p class="text-secondary font-medium text-xs md:text-base mt-0">${heading.subheading}</p>
                          </div>
                        </div>
                      `,
                )
                .join("")}
                    </div>
                  </div>
                </div>`
            : ""
    }
</div>
`;
          timelineContainer.insertAdjacentHTML("beforeend", timelineItem);
        });
