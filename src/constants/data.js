import images from "./images"



const Benefits = [
    {
        title: "Brand Awareness",
        illustration: images.Partnership_BrandAwareness
    },
    {
        title: "Business Growth",
        illustration: images.Partnership_BusinessGrowth
    },
    {
        title: "Community Building",
        illustration: images.Partnership_Community
    }
];



const WhyIndia = [
    {
        title: "Cost Efficient Workforce",
        illustration: images.Partnership_Workforce
    },
    {
        title: "First Movers Advantage",
        illustration: images.Partnership_FirstMovers
    },
    {
        title: "Deep Skill-Base",
        illustration: images.Partnership_Skill
    },
    {
        title: "No.1 Ranking in GSLI by Kearny",
        illustration: images.Partnership_Ranking
    },
    {
        title: "2M Engineers Graduate Each Year",
        illustration: images.Partnership_Engineers
    },
    {
        title: "1M Engineers Select IT Each Year",
        illustration: images.Partnership_IT
    }
];



const Learning = [
    {
        title: "For Learners",
        description: "Accelerated career | Higher income jobs | Transition ready skills | Futuristic skillset",
        illustration: images.Learn_Learners,
        navigatinglink: ""
    },
    {
        title: "For System Integrators",
        description: "Business agility | Employee Engagement | Proficiency certificates | Efficient workforce",
        illustration: images.Learn_SystemIntegrators,
        navigatinglink: ""
    },
    {
        title: "For Educational Institutes",
        description: "Enhanced Placements | Reputation & Rank | Future-proofed grads | Learning experience",
        illustration: images.Learn_Education,
        navigatinglink: ""
    }
];



const FeatureList = [
    {
        title: "Hybrid Learning (Digital + Physical)",
        illustration: images.Features_HybridLearning
    },
    {
        title: "Full Lifetime Access",
        illustration: images.Features_LifetimeAccess
    },
    {
        title: "Community Access",
        illustration: images.Features_CommunityAccess
    },
    {
        title: "Blended Learning (Self Paced + Interactive)",
        illustration: images.Features_BlendedLearning
    },
    {
        title: "Certification of Completion",
        illustration: images.Features_Certification
    },
    {
        title: "Industry Mentoring",
        illustration: images.Features_IndustryMentorship
    },
    {
        title: "100% Free Training",
        illustration: images.Features_FreeTraining
    },
    {
        title: "Hands On Live Projects",
        illustration: images.Features_HandsOn
    },
    {
        title: "Placement Support",
        illustration: images.Features_PlacementSupport
    },
    {
        title: "Access to Online/Offline Events",
        illustration: images.Features_Access
    },
    {
        title: "Online Practice Lab Access",
        illustration: images.Features_OnlinePractice
    },
    {
        title: "Customization",
        illustration: images.Features_Customization
    },
    {
        title: "Offline Training On Demand",
        illustration: images.Features_OfflineTraining
    },
    {
        title: "Regular Academic Support",
        illustration: images.Features_RegularSupport
    }
];



const CityList = [
    "Delhi NCR",
    "Hyderabad, Telangana",
    "Mumbai, Maharashtra",
    "Pune, Maharashtra",
    "Chennai, Tamil Nadu",
    "Bangaluru, Karnataka"
];



const TopCourses = [
    {
        title: "Snap Development Certification",
        illustration: images.Course_Certification,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Integrator Certification",
        illustration: images.Course_Integration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Administrator Certification",
        illustration: images.Course_Administration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Architect Certification",
        illustration: images.Course_Architecture,
        navigatinglink: ""
    }
];



const AllCourses = [
    {
        title: "Snap Development Certification",
        illustration: images.Course_Certification,
        navigatinglink: ""
    },
    {
        title: "Snap Development Training",
        illustration: images.Course_Certification,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Integrator Certification",
        illustration: images.Course_Integration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Integrator Training",
        illustration: images.Course_Integration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Integrator Library",
        illustration: images.Course_Integration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Administrator Certification",
        illustration: images.Course_Administration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Administrator Training",
        illustration: images.Course_Administration,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Architect Certification",
        illustration: images.Course_Architecture,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Architect Training",
        illustration: images.Course_Architecture,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Continuous Integration and Continuous Delivery",
        illustration: images.Course_Certification,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Certified Enterprise Automation Professional",
        illustration: images.Course_Certification,
        navigatinglink: ""
    },
    {
        title: "SnapLogic Accreditation",
        illustration: images.Course_Certification,
        navigatinglink: ""
    }
];



const AllCourseDetails = [
    {
        title: "Snap Development Certification",
        illustration: images.Course_Certification,
        description: "The SnapLogic Developer Certification is aimed at testing your expertise in using the SnapLogic SDK, implementing different parts of Snap functionality, and building custom Snaps.",
        about: <>
          <b>Step 1: Content</b>
          <br></br>
          In this course, you will learn how to develop Snaps.
          <br></br>
          <br></br>
          This course contains 7 lessons:
          <ol>
            <li>Introduction to Snap Development &ndash; Learn how to create custom Snaps, about the development environment setup and internal working of Snaps and Snaplexes, and understand the various stages that a Snap undergoes during runtime.</li>
            <li>Getting started with Snap Development &ndash; Learn how to: import the Snap Maven Archetype to create a project, and about the interfaces and base classes that can be used for Snap Development.</li>
            <li>Packaging and Deploying Snap Packs &ndash; Learn how to: set up the environment and configurations required to package and deploy Snaps, package Snap class files as Snap Packs, and deploy a Snap Pack to SnapLogic.</li>
            <li>Creating Snap UI &ndash; Learn how to build a Snap User Interface, including elements in the settings, views, and info tabs.</li>
            <li>Suggesting inputs and populating schema &ndash; Learn how to: write code to suggest inputs for fields in the Snap UI, and populate input and target schemas.</li>
            <li>Validating inputs and processing data &ndash; Learn how to: use the inputs specified by the user and the incoming data from the upstream Snaps to write the processing logic, and send data to the subsequent downstream Snaps via the Output and Error views.</li>
            <li>Creating and using accounts &ndash; Learn how to associate account classes to Snaps and use these accounts from the Snap classes.</li>
          </ol>
          <br></br>
          <br></br>
          The estimated time to complete this course is 4 hours.
          <br></br>
          <br></br>
          <b>Step 2: Certification Exam</b>
          <br></br>
          The Certification Exam consists of multiple-choice questions &ndash; A set of multiple-choice questions that assess your knowledge and understanding of various SnapLogic SDK used for Snap Development and unit testing.
          <br></br>
          By signing up for this accreditation and training, you agree for us to send your name and email address to our third-party accreditation partners.
        </>,
        curriculum: <>
          <b>SnapLogic Developer Training</b>
          <br></br>
          <ol>
            <li>Welcome to SnapLogic Developer Training</li>
            <li>Introduction to Snap Development</li>
            <li>Getting started with Snap Development</li>
            <li>Packaging and Deploying Snap Packs</li>
            <li>Creating Snap UI</li>
            <li>Suggesting inputs and populating schema</li>
            <li>Validating inputs and processing data</li>
            <li>Creating and using accounts</li>
          </ol>
          <br></br>
          <b>SnapLogic Unit Testing Framework</b>
          <ul>
            <li>SnapLogic Unit Testing Framework</li>
          </ul>
          <br></br>
          <br></br>
          <b>Quiz</b>
          <ul>
            <li>Part 1: MCQs</li>
          </ul>
        </>
    },
    {
        title: "Snap Development Training",
        illustration: images.Course_Certification,
        description: "In this course, you will learn how to develop Snaps. This course contains 7 lessons: 1. Introduction to Snap Development 2. Getting started with Snap Development 3. Packaging and Deploying Snap Packs 4. Creating Snap UI 5. Suggesting inputs and populating schema 6. Validating inputs and processing data 7. Creating and using accounts The estimated time to complete this course is 4 hours.",
        about: <>
          In this course, you will learn how to develop Snaps.
          <br></br>
          This course contains 7 lessons:
          <br></br>
          <br></br>
          This course contains 7 lessons:
          <ol>
            <li>Introduction to Snap Development &ndash; Learn how to create custom Snaps, about the development environment setup and internal working of Snaps and Snaplexes, and understand the various stages that a Snap undergoes during runtime.</li>
            <li>Getting started with Snap Development &ndash; Learn how to: import the Snap Maven Archetype to create a project, and about the interfaces and base classes that can be used for Snap Development.</li>
            <li>Packaging and Deploying Snap Packs &ndash; Learn how to: set up the environment and configurations required to package and deploy Snaps, package Snap class files as Snap Packs, and deploy a Snap Pack to SnapLogic.</li>
            <li>Creating Snap UI &ndash; Learn how to build a Snap User Interface, including elements in the settings, views, and info tabs.</li>
            <li>Suggesting inputs and populating schema &ndash; Learn how to: write code to suggest inputs for fields in the Snap UI, and populate input and target schemas.</li>
            <li>Validating inputs and processing data &ndash; Learn how to: use the inputs specified by the user and the incoming data from the upstream Snaps to write the processing logic, and send data to the subsequent downstream Snaps via the Output and Error views.</li>
            <li>Creating and using accounts &ndash; Learn how to associate account classes to Snaps and use these accounts from the Snap classes.</li>
          </ol>
          <br></br>
          <br></br>
          The estimated time to complete this course is 4 hours.
        </>,     
        curriculum: <>
          <b>SnapLogic Developer Training</b>
          <br></br>
          <ol>
            <li>Welcome to SnapLogic Developer Training</li>
            <li>Introduction to Snap Development</li>
            <li>Getting started with Snap Development</li>
            <li>Packaging and Deploying Snap Packs</li>
            <li>Creating Snap UI</li>
            <li>Suggesting inputs and populating schema</li>
            <li>Validating inputs and processing data</li>
            <li>Creating and using accounts</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic Integrator Certification",
        illustration: images.Course_Integration,
        description: "The SnapLogic Integrator certification is aimed at testing your expertise on all the core aspects involved in using SnapLogic for various integration needs across the organization.",
        about: <>
          The SnapLogic Integrator Certification is aimed at testing your expertise on all the core aspects involved in using SnapLogic for various integration needs across industries and lines-of-business.
          <br></br>
          <br></br>
          To prepare for the certification, you will have to finish all courses outlined in the training path below. The Certification Exam is included in this purchase. A certification will be granted only upon the successful passing of the Certification Exam.
          <br></br>
          <br></br>
          Upon successful passing of the certification exam, you will be SnapLogic certified and issued a certificate. The certificate is valid for 2 years from the date of issuance.
          <br></br>
          <br></br>
          Before taking the certification exam, you must complete all of the courses and videos outlined in the Certification Path below:
          <br></br>
          <ol>
            <li>SnapLogic Beginner Training (6 hours of learning)</li>
            <li>Creating and Managing Ultra Tasks (3 hours of learning)</li>
            <li>Migrating Pipelines and Projects from one Org to Another using SnapLogic</li>
            <li>Metadata Snaps (1 hour of learning)</li>
            <li>User Assistance Videos for most commonly used Endpoints (60 Videos | 15+ Endpoints | 10 hours of learning). Endpoints for which we currently have videos include:</li>
            <ul>
                <li>SOAP</li>
                <li>S3</li>
                <li>SAP</li>
                <li>NetSuite</li>
                <li>Salesforce</li>
                <li>Anaplan</li>
                <li>JDBC</li>
                <li>JMS</li>
                <li>SQL Server</li>
                <li>ServiceNow</li>
                <li>Workday</li>
                <li>REST</li>
                <li>Redshift</li>
                <li>Big Data</li>
                <li>Oracle</li>
            </ul>
          </ol>
          <br></br>
          E-Learning users can credit the completion of the above-mentioned courses towards their certification if all of the required courses and videos have been completed within one year of the certification exam date.
          <br></br>
          <br></br>
          The Certification Exam consists of two parts:
          <br></br>
          <ol>
            <li>Multiple choice questions &ndash; a set of multiple-choice questions that assess your understanding of various SnapLogic concepts and implementation details.</li>
            <li>Scenario-based assessment &ndash; a set of 4 scenarios in which you must create Pipelines & Tasks to implement the described scenarios.</li>
          </ol>
          <br></br>
          The results of the multiple-choice questions are immediately displayed along with the answers that were incorrect.
          <br></br>
          <br></br>
          Note:
          <ol>
            <li>The artifacts created for the hands-on evaluation part of the certification will be validated by the SnapLogic team within two weeks.</li>
            <li>After we complete the assessment, you will receive an email notifying you of the results and the completion certificate upon the successful completion of the certification.</li>
            <li>Users have 28 days to complete the SnapLogic Integrator Certification (E-Learning) learning path. After completion of the learning path, they must complete the certification exam within 7 days. In the event where the user fails to complete the certification within the said timeframe, the certification will be considered forfeited.</li>
          </ol>
          <br></br>
          <br></br>
          By signing up for this accreditation and training, you agree for us to send your name and email address to our third-party accreditation partners.
        </>,
        curriculum: <>
        <b>SnapLogic Beginner Training</b>
        <br></br>
        <ol>
          <li>SnapLogic Platform Login Credentials</li>
          <li>Lesson_Introduction to SnapLogic Intelligent Integration Platform</li>
          <li>Lesson_Platform Overview and Managing Assets</li>
          <li>Lesson_Creating and Managing Pipelines</li>
          <li>Lesson_Using Expression Language</li>
          <li>Lesson_Creating and Managing Tasks</li>
          <li>Lesson_Managing and Monitoring Assets</li>
          <li>Lesson_Modularizing and Reusing Pipelines</li>
        </ol>
        <br></br>
        <b>Anaplan User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Writing Documents to Anaplan_UC1</li>
          <li>Writing Record Documents From Workday to Anaplan_UC2</li>
          <li>Writing Data From SAP to Anaplan_UC3</li>
          <li>Migrating Data From one Anaplan Model to Another_UC4</li>
        </ol>
        <br></br>
        <b>JDBC User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Writing Data Using Generic JDBC Snaps UC 1</li>
          <li>Updating Data Using Generic JDBC Snaps UC 2</li>
          <li>Reading Data Using Generic JDBC UC 3</li>
          <li>Deleting Records Using Generic JDBC UC 4</li>
        </ol>
        <br></br>
        <b>JMS User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Writing Messages to a JMS Queue UC 1 New</li>
          <li>Reading Data From a JMS Queue UC 2 New</li>
          <li>Writing Messages With Dynamic Headers to a JMS Queue UC 3 New</li>
          <li>Using Client Acknowledgement Mode UC 4 New</li>
        </ol>
        <br></br>
        <b>NetSuite User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Searching records in NetSuite_UC 1</li>
          <li>Reading files from NetSuite_UC 2</li>
          <li>Upsert data from Salesforce to NetSuite_UC 3</li>
        </ol>
        <br></br>
        <b>Oracle User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Writing data to a table_UC 1</li>
          <li>Moving data from one table to another_UC 2</li>
          <li>Logging Parent-Child Pipelines' execution details_UC 3</li>
          <li>Passthrough without using Copy_UC 4</li>
        </ol>
        <br></br>
        <b>Redshift User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Sync data in Redshift UC 1</li>
          <li>Unloading data from Redshift to S3 UC 2</li>
          <li>Using Redshift Bulk Load UC 3</li>
          <li>Using the Redshift SCD 2 Snap UC 4</li>
        </ol>
        <br></br>
        <b>REST User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Sending Documents Using REST POST UC 1</li>
          <li>Retrieving Documents Using REST GET UC 2</li>
          <li>Consuming XML Using REST GET UC 3</li>
          <li>Exposing a Pipeline as a REST Service Using Ultra Tasks UC 4</li>
        </ol>
        <br></br>
        <b>S3 User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Writing to and reading from Amazon S3_UC 1</li>
          <li>Reading multiple files from S3_UC 2</li>
          <li>Deleting multiple files from S3_UC 3</li>
        </ol>
        <br></br>
        <b>Salesforce User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Creating Leads in Salesforce_UC 1</li>
          <li>Reading data from Salesforce_UC 2</li>
          <li>Salesforce and Workday bi-directional integration_UC 3</li>
          <li>Capturing outbound messages from Salesforce_UC 4</li>
        </ol>
        <br></br>
        <b>SAP User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Reading a customer master record using BAPI_UC 1</li>
          <li>Creating a sales order using BAPI_UC 2</li>
          <li>Receiving customer master IDocs using IDoc Listener_UC 3</li>
          <li>Creating a vendor master record using IDoc_UC 4</li>
        </ol>
        <br></br>
        <b>ServiceNow User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Joining date from Salesforce and ServiceNow_UC 1</li>
          <li>Migrating issues from Jira to ServiceNow_UC 2</li>
          <li>Creating marketing tasks in ServiceNow_UC 3</li>
          <li>Writing new hire data to ServiceNow_UAV4</li>
        </ol>
        <br></br>
        <b>SOAP User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Retrieving data using SOAP_UC 1</li>
          <li>Accessing SOAP Service using REST Service_UC 2</li>
        </ol>
        <br></br>
        <b>SQL Server User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Reading Data From SQL Server UseCase1</li>
          <li>Writing Data to SQL Server UseCase2</li>
          <li>Migrating Data Using Parallel Run UseCase3</li>
          <li>Generating Avro Schema UseCase4</li>
        </ol>
        <br></br>
        <b>Ultra Tasks</b>
        <br></br>
        <ol>
          <li>Creating Ultra Pipelines</li>
          <li>Creating and Managing Ultra Tasks</li>
          <li>Demonstration_Writing Data to SQL using Ultra Tasks</li>
          <li>Demonstration_Retrieving Data from a REST Service using Ultra Tasks</li>
          <li>Demonstration_Polling Files using Ultra Tasks</li>
          <li>Hands On Exercise-1</li>
          <li>Hands On Exercise-2</li>
        </ol>
        <br></br>
        <b>Workday User Assistance Videos</b>
        <br></br>
        <ol>
          <li>Extracting Workday data and uploading it to NetSuite_UC 1</li>
          <li>Exporting Workday reports as a Service_UC 2</li>
          <li>Exporting new hire data from Workday_UC 3</li>
          <li>Writing user data to Workday_UC 4</li>
        </ol>
        <br></br>
        <b>SnapLogic - Continuous Integration and Continuous Delivery (Migration)</b>
        <br></br>
        <ol>
          <li>CICD-SnapLogic-Projects Promotion</li>
        </ol>
        <br></br>
        <b>Certification Exam</b>
        <br></br>
        <ol>
          <li>Introduction</li>
          <li>Part 1: Multiple Choice Questions</li>
          <li>Part 2: Scenario-based Assessment</li>
        </ol>
      </>
    },
    {
        title: "SnapLogic Integrator Training",
        illustration: images.Course_Integration,
        about: <>
          The SnapLogic Integrator Training teaches all of the concepts and tasks involved in using the SnapLogic Enterprise Integration cloud to integrate various end-points. It also teaches how to manage and monitor your SnapLogic instance.  It also contains hands-on exercises for practice. So, ensure that you have access to your SnapLogic Enterprise Integration Platform instance.  If you do not have access to the SnapLogic Integration Platform, please contact your SnapLogic Administrator or SnapLogic Account Manager.
          <br></br>
          <br></br>
          This course should take ~8 hours to complete.
          <br></br>
          <br></br>
          Note: The login credentials for SnapLogic University are different from the SnapLogic Instance credentials.
        </>,
        curriculum: <>
          <b>SnapLogic Integrator Training</b>
          <br></br>
          <ol>
            <li>Lesson_Introduction to SnapLogic Enterprise Integration Cloud</li>
            <li>Lesson_Platform Overview and Managing Assets</li>
            <li>HandsOn_Importing Projects</li>
            <li>Lesson_Creating and Managing Pipelines</li>
            <li>Demo_Creating a Pipeline</li>
            <li>Reading Assignment_CoreSnaps</li>
            <li>HandsOn_Creating a Pipeline</li>
            <li>Lesson_Using Expression Language</li>
            <li>Demo_Using Expression Language</li>
            <li>Reading Assignment_Expression Language</li>
            <li>Hands-On_Using Expression Language</li>
            <li>Lesson_Creating and Managing Tasks</li>
            <li>Demo_Creating Tasks</li>
            <li>Lesson_Managing and Monitoring Assets</li>
            <li>Lesson_Modularizing and Reusing Pipelines</li>
            <li>Demo_Using the Pipeline Execute Snap</li>
            <li>Hands-On_Reusing Pipelines</li>
            <li>Video_Extracting Data from Workday and Writing it to NetSuite</li>
            <li>Video_Migrating Account Records from Salesforce to NetSuite</li>
            <li>Video_Migrating Customer Records from Redshift to NetSuite</li>
            <li>Video_Sending Twitter Reports via Email</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic Integrator Library",
        illustration: images.Course_Integration,
        description: "The SnapLogic Integrator Training teaches all of the concepts and tasks involved in using SnapLogic Enterprise Integration cloud to integrate various end-points. It also teaches how to manage and monitor your SnapLogic instance. It also contains hands-on exercises for practice. So, ensure that you have access to your SnapLogic Enterprise Integration Platform instance. If you do not have access to the SnapLogic Platform, please contact your SnapLogic Administrator/SnapLogic Account Manager.",       
        curriculum: <>
          <b>SnapLogic Integrator Training</b>
          <br></br>
          <ol>
            <li>Lesson_Introduction to SnapLogic Enterprise Integration Cloud</li>
            <li>Lesson_Platform Overview and Managing Assets</li>
            <li>HandsOn_Importing Projects</li>
            <li>Lesson_Creating and Managing Pipelines</li>
            <li>Demo_Creating a Pipeline</li>
            <li>Reading Assignment_CoreSnaps</li>
            <li>HandsOn_Creating a Pipeline</li>
            <li>Lesson_Using Expression Language</li>
            <li>Demo_Using Expression Language</li>
            <li>Reading Assignment_Expression Language</li>
            <li>Hands-On_Using Expression Language</li>
            <li>Lesson_Creating and Managing Tasks</li>
            <li>Demo_Creating Tasks</li>
            <li>Lesson_Managing and Monitoring Assets</li>
            <li>Lesson_Modularizing and Reusing Pipelines</li>
            <li>Demo_Using the Pipeline Execute Snap</li>
            <li>Hands-On_Reusing Pipelines</li>
            <li>Video_Extracting Data from Workday and Writing it to NetSuite</li>
            <li>Video_Migrating Account Records from Salesforce to NetSuite</li>
            <li>Video_Migrating Customer Records from Redshift to NetSuite</li>
            <li>Video_Sending Twitter Reports via Email</li>
          </ol>
          <br></br>
          <b>REST User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Sending Documents Using REST POST UC 1</li>
            <li>Retrieving Documents Using REST GET UC 2</li>
            <li>Consuming XML Using REST GET UC 3</li>
            <li>Exposing a Pipeline as a REST Service Using Ultra Tasks UC 4</li>
          </ol>
          <br></br>
          <b>SOAP User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Retrieving data using SOAP_UC 1</li>
            <li>Accessing SOAP Service using REST Service_UC 2</li>
          </ol>
          <br></br>
          <b>JDBC User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing Data Using Generic JDBC Snaps UC 1</li>
            <li>Updating Data Using Generic JDBC Snaps UC 2</li>
            <li>Reading Data Using Generic JDBC UC 3</li>
            <li>Deleting Records Using Generic JDBC UC 4</li>
          </ol>
          <br></br>
          <b>Creating and Managing Ultra Tasks</b>
          <br></br>
          <ol>
            <li>Creating Ultra Pipelines</li>
            <li>Creating and Managing Ultra Tasks</li>
            <li>Demonstration_Writing Data to SQL using Ultra Tasks</li>
            <li>Demonstration_Retrieving Data from a REST Service using Ultra Tasks</li>
            <li>Demonstration_Polling Files using Ultra Tasks</li>
            <li>Hands On Exercise-1</li>
            <li>Hands On Exercise-2</li>
          </ol>
          <br></br>
          <b>Anaplan User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing Documents to Anaplan_UC1</li>
            <li>Writing Record Documents From Workday to Anaplan_UC2</li>
            <li>Writing Data From SAP to Anaplan_UC3</li>
            <li>Migrating Data From one Anaplan Model to Another_UC4</li>
          </ol>
          <br></br>
          <b>Redshift User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Sync data in Redshift UC 1</li>
            <li>Unloading data from Redshift to S3 UC 2</li>
            <li>Using Redshift Bulk Load UC 3</li>
            <li>Using the Redshift SCD 2 Snap UC 4</li>
          </ol>
          <br></br>
          <b>S3 User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing to and reading from Amazon S3_UC 1</li>
            <li>Reading multiple files from S3_UC 2</li>
            <li>Deleting multiple files from S3_UC 3</li>
          </ol>
          <br></br>
          <b>Salesforce User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Creating Leads in Salesforce_UC 1</li>
            <li>Reading data from Salesforce_UC 2</li>
            <li>Salesforce and Workday bi-directional integration_UC 3</li>
            <li>Capturing outbound messages from Salesforce_UC 4</li>
          </ol>
          <br></br>
          <b>Service Now User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Joining date from Salesforce and ServiceNow_UC 1</li>
            <li>Migrating issues from Jira to ServiceNow_UC 2</li>
            <li>Creating marketing tasks in ServiceNow_UC 3</li>
            <li>Writing new hire data to ServiceNow_UAV4</li>
          </ol>
          <br></br>
          <b>Workday User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Extracting Workday data and uploading it to NetSuite_UC 1</li>
            <li>Exporting Workday reports as a Service_UC 2</li>
            <li>Exporting new hire data from Workday_UC 3</li>
            <li>Writing user data to Workday_UC 4</li>
          </ol>
          <br></br>
          <b>Oracle User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing data to a table_UC 1</li>
            <li>Moving data from one table to another_UC 2</li>
            <li>Logging Parent-Child Pipelines' execution details_UC 3</li>
            <li>Passthrough without using Copy_UC 4</li>
          </ol>
          <br></br>
          <b>SAP User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Reading a customer master record using BAPI_UC 1</li>
            <li>Creating a sales order using BAPI_UC 2</li>
            <li>Receiving customer master IDocs using IDoc Listener_UC 3</li>
            <li>Creating a vendor master record using IDoc_UC 4</li>
          </ol>
          <br></br>
          <b>SQL Server User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Reading Data From SQL Server UseCase1</li>
            <li>Writing Data to SQL Server UseCase2</li>
            <li>Migrating Data Using Parallel Run UseCase3</li>
            <li>Generating Avro Schema UseCase4</li>
          </ol>
          <br></br>
          <b>JMS User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing Messages to a JMS Queue UC 1 New</li>
            <li>Reading Data From a JMS Queue UC 2 New</li>
            <li>Writing Messages With Dynamic Headers to a JMS Queue UC 3 New</li>
            <li>Using Client Acknowledgement Mode UC 4 New</li>
          </ol>
          <br></br>
          <b>NetSuite User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Searching records in NetSuite_UC 1</li>
            <li>Reading files from NetSuite_UC 2</li>
            <li>Upsert data from Salesforce to NetSuite_UC 3</li>
          </ol>
          <br></br>
          <b>SnapLogic - Continuous Integration and Continuous Delivery (Migration)</b>
          <br></br>
          <ol>
            <li>CICD-SnapLogic-Projects Promotion</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic Administrator Certification",
        illustration: images.Course_Administration,
        about: <>
          To become a certified SnapLogic Administrator, the SnapLogic Administration Certification is aimed at testing your expertise in supporting the administrative-level tasks for your SnapLogic instance. You will be tested on the various administrative level tasks that you will have to perform as a SnapLogic administrator. By signing up for this accreditation and training, you agree for us to send your name and email address to our third-party accreditation partners. The access to this course will be for 30 days.
        </>,
        curriculum: <>
          <b>SnapLogic Developer Training</b>
          <br></br>
          <ol>
            <li>Introduction to SnapLogic Enterprise Integration Cloud</li>
            <li>SnapLogic Platform User and User Groups</li>
            <li>Managing a SnapLogic Instance</li>
            <li>Monitoring a SnapLogic Instance</li>
            <li>Snaplex Management</li>
          </ol>
          <br></br>
          <b>SnapLogic Administrators Certification</b>
          <ul>
            <li>Multiple Choice questions</li>
          </ul>
        </>
    },
    {
        title: "SnapLogic Administrator Training",
        illustration: images.Course_Administration,
        about: <>
          The course contains five lessons:
          <ol>
            <li>Introduction to SnapLogic Enterprise Integration Cloud: Learn about SnapLogic&apos;s architecture, key terms and concepts, and the functionality of the SnapLogic interfaces, i.e., the Designer, the Manager, and the Dashboard.</li>
            <li>SnapLogic Platform Users and Groups: Master how to create users and groups in SnapLogic, learn about different user groups, update user information, and reset user passwords.</li>
            <li>Managing the SnapLogic Instance via the Manager: Learn how to manage and monitor the SnapLogic instance from the Manager Interface. Also, you get an overview of the Manager interface, key user roles, and different organizational settings available to an administrator in SnapLogic.</li>
            <li>Monitoring a SnapLogic Instance via the Dashboard: Learn how to monitor your SnapLogic instance from the Dashboard pane and how to monitor pipeline and Snaplex health in SnapLogic.</li>
            <li>Snaplex Management: Learn about different types of Snaplexes and how to create, update, configure, and move a Groundplex.</li>
          </ol>
          <br></br>
          <br></br>
          The estimated duration is 3- 4 hours.
          </>,
        curriculum: <>
          <ol>
            <li>Introduction to SnapLogic Enterprise Integration Cloud</li>
            <li>SnapLogic Platform User and User Groups</li>
            <li>Managing a SnapLogic Instance</li>
            <li>Monitoring a SnapLogic Instance</li>
            <li>Snaplex Management</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic Architect Certification",
        illustration: images.Course_Architecture,
        description: "To become a certified SnapLogic Architect, the SnapLogic Architect Certification is aimed at testing your expertise on integration reference architectures for the SnapLogic platform. You will be tested on the various key strategies that you will have to perform as a SnapLogic architect.By signing up for this accreditation and training, you agree for us to send your name and email address to our third-party accreditation partners.",        
        curriculum: <>
          <ol>
            <li>SnapLogic Architecture</li>
            <li>Configuring and Managing a SnapLogic Instance</li>
            <li>Understanding Snaplex Requirements</li>
            <li>Managing Pipeline Lifecycle</li>
            <li>Performing Advanced Data Transformations</li>
            <li>SnapLogic API Management</li>
            <li>Resumable Pipelines</li>
            <li>Best Practices</li>
          </ol>
          <br></br>
          <b>Certification Exam</b>
          <ul>
            <li>Introduction.pdf</li>
            <li>Architect Certification Exam</li>
          </ul>
        </>
    },
    {
        title: "SnapLogic Architect Training",
        illustration: images.Course_Architecture,
        description: "The SnapLogic Architect course covers the key strategies for architecture selection. This course walks you through various Integration Reference Architectures.",        
        curriculum: <>
          <ol>
            <li>SnapLogic Architecture</li>
            <li>Configuring and Managing a SnapLogic Instance</li>
            <li>Understanding Snaplex Requirements</li>
            <li>Managing Pipeline Lifecycle</li>
            <li>Performing Advanced Data Transformations</li>
            <li>SnapLogic API Management</li>
            <li>Resumable Pipelines</li>
            <li>Best Practices</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic: Continuous Integration and Continuous Delivery",
        illustration: images.Course_Certification,
        description: <>The SnapLogic Continuous Integration and Continuous Delivery (CICD) training introduces you to the concept of Continuous Integration and Continuous Delivery from SnapLogic&apos;s perspective.</>,
        about: <>
          The SnapLogic Continuous Integration and Continuous Delivery training contain the following lessons:
          <br></br>
          <br></br>
          <ol>
            <li><b>Project Promotion using Pipelines</b> &ndash; Learn how to promote project assets using a promotion deployment pipeline.</li>
            <li><b>Automating Project Promotion using Jenkins</b> &ndash; Learn how to promote project assets using a CI-CD tool such as Jenkins and to create parameterized jobs in Jenkins that use a Triggered Task in SnapLogic to call a promotion deployment pipeline.</li>
            <li><b>Backing up projects to GitHub</b> &ndash; Learn how to backup SnapLogic project assets automatically to version control systems such as GitHub using a promotion deployment pipeline. And, learn how to restore these SnapLogic project assets back into a SnapLogic instance.</li>
            <li><b>Project Promotion using APIs</b> &ndash; Learn how to migrate projects from one org to another using SnapLogic APIs.</li>
          </ol>
        </>,        
        curriculum: <>
          <ol>
            <li>CICD-SnapLogic-Projects Promotion</li>
            <li>CICD-SnapLogic-Jenkins</li>
            <li>CICD-SnapLogic-Github Integration</li>
            <li>CICD-SnapLogic-API Project Migration</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic Certified Enterprise Automation Professional",
        illustration: images.Course_Certification,
        description: "The SnapLogic Certified Enterprise Automation Professional is an advanced certification program for integrator personnel that meets or exceeds the training, experience, and examination requirements. It is an intermediate-level course that builds on the concepts introduced in the beginner training and SnapLogic Accreditation course.",
        about: <>
          The certification program is aimed at testing your expertise on all core concepts involved in using SnapLogic for various integration needs across industries and lines of business. This learning path gives Integrators complete insight into the rich and advanced features of the SnapLogic platform. It also provides an extensive set of hands-on exercises that teaches students to become very proficient on the SnapLogic platform.
          <br></br>
          <br></br>
          Users have 4 weeks to complete the &epos;SnapLogic Certified Enterprise Automation Professional&epos; (e-Learning) learning path and complete the exam.
          <br></br>
          <br></br>
          Upon successful passing of the certification exam, you will be SnapLogic certified and issued a certificate. The certificate is valid for 2 years from the date of issuance.
          <br></br>
          <br></br>
          To prepare for the certification, you will have to finish all the courses outlined in the training path below.
          <br></br>
          <br></br>
          <ol>
            <li>SnapLogic Enterprise Integration Cloud, its architecture, and some key terms, and concepts</li>
            <li>SnapLogic Platform overview and Managing Assets</li>
            <li>Creating, Managing, and monitoring SnapLogic workflow</li>
            <li>Usage of expression language to transform and manipulate data</li>
            <li>Creating and Managing Tasks</li>
            <li>Working with SnapLogic Manager and Dashboard Console</li>
            <li>Modularizing and Reusing Pipelines</li>
            <li>Creating and Managing Ultra Tasks</li>
            <li>Migrating Pipelines and Projects from one Org to another using SnapLogic Metadata</li>
            <li>User Assistance Videos for most commonly used Endpoints (50+ Videos | 15+ Endpoints | 10+ hours of learning). Endpoints for which we currently have videos include - Anaplan, JDBC, JMS, NetSuite, Oracle, Redshift, REST, S3, Salesforce, SAP, ServiceNow, SOAP, SQL Server, Workday.</li>
          </ol>
          <br></br>
          <br></br>
          You have 3 Levels of the SnapLogic Certified Enterprise Automation Professional Exam - Level I, Level II, and Level III:
          <br></br>
          <br></br>
          Level I of the exam tests your knowledge and comprehension.
          <br></br>
          <br></br>
          Level II of the exam tests your application and analysis.
          <br></br>
          <br></br>
          Level III of the exam requires you to showcase the same skills as Level II, but you should be able to make judgment calls here.
          <br></br>
          <br></br>
          A countdown timer is shown at each level in the quiz and when the timer has run out, the quiz is submitted automatically with whatever answers have been filled in so far. You must score 80% or more in each of these levels to clear this exam. The results are displayed immediately after you complete the assessment.
          <br></br>
          <br></br>
          In the event where the user fails to complete the certification within the said timeframe, the certification will be considered forfeited.
          <br></br>
          <br></br>
          By signing up for this accreditation and training, you agree for us to send your name and email address to our third-party accreditation partners.</>,        
        curriculum: <>
          <b>SnapLogic Beginner Training</b>
          <br></br>
          <ol>
            <li>SnapLogic Platform Login Credentials</li>
            <li>Lesson_Introduction to SnapLogic Intelligent Integration Platform</li>
            <li>Lesson_Platform Overview and Managing Assets</li>
            <li>Lesson_Creating and Managing Pipelines</li>
            <li>Lesson_Using Expression Language</li>
            <li>Lesson_Creating and Managing Tasks</li>
            <li>Lesson_Managing and Monitoring Assets</li>
            <li>Lesson_Modularizing and Reusing Pipelines</li>
          </ol>
          <br></br>
          <b>Anaplan User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing Documents to Anaplan_UC1</li>
            <li>Writing Record Documents From Workday to Anaplan_UC2</li>
            <li>Writing Data From SAP to Anaplan_UC3</li>
            <li>Migrating Data From one Anaplan Model to Another_UC4</li>
          </ol>
          <br></br>
          <b>JDBC User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing Data Using Generic JDBC Snaps UC 1</li>
            <li>Updating Data Using Generic JDBC Snaps UC 2</li>
            <li>Reading Data Using Generic JDBC UC 3</li>
            <li>Deleting Records Using Generic JDBC UC 4</li>
          </ol>
          <b>JMS User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing Messages to a JMS Queue UC 1 New</li>
            <li>Reading Data From a JMS Queue UC 2 New</li>
            <li>Writing Messages With Dynamic Headers to a JMS Queue UC 3 New</li>
            <li>Using Client Acknowledgement Mode UC 4 New</li>
          </ol>
          <br></br>
          <b>NetSuite User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Searching records in NetSuite_UC 1</li>
            <li>Reading files from NetSuite_UC 2</li>
            <li>Upsert data from Salesforce to NetSuite_UC 3</li>
          </ol>
          <br></br>
          <b>Oracle User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing data to a table_UC 1</li>
            <li>Moving data from one table to another_UC 2</li>
            <li>Logging Parent-Child Pipelines' execution details_UC 3</li>
            <li>Passthrough without using Copy_UC 4</li>
          </ol>
          <br></br>
          <b>Redshift User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Sync data in Redshift UC 1</li>
            <li>Unloading data from Redshift to S3 UC 2</li>
            <li>Using Redshift Bulk Load UC 3</li>
            <li>Using the Redshift SCD 2 Snap UC 4</li>
          </ol>
          <br></br>
          <b>REST User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Sending Documents Using REST POST UC 1</li>
            <li>Retrieving Documents Using REST GET UC 2</li>
            <li>Consuming XML Using REST GET UC 3</li>
            <li>Exposing a Pipeline as a REST Service Using Ultra Tasks UC 4</li>
          </ol>
          <br></br>
          <b>S3 User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Writing to and reading from Amazon S3_UC 1</li>
            <li>Reading multiple files from S3_UC 2</li>
            <li>Deleting multiple files from S3_UC 3</li>
          </ol>
          <br></br>
          <b>Salesforce User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Creating Leads in Salesforce_UC 1</li>
            <li>Reading data from Salesforce_UC 2</li>
            <li>Salesforce and Workday bi-directional integration_UC 3</li>
            <li>Capturing outbound messages from Salesforce_UC 4</li>
          </ol>
          <br></br>
          <b>SAP User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Reading a customer master record using BAPI_UC 1</li>
            <li>Creating a sales order using BAPI_UC 2</li>
            <li>Receiving customer master IDocs using IDoc Listener_UC 3</li>
            <li>Creating a vendor master record using IDoc_UC 4</li>
          </ol>
          <br></br>
          <b>Service Now User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Joining date from Salesforce and ServiceNow_UC 1</li>
            <li>Migrating issues from Jira to ServiceNow_UC 2</li>
            <li>Creating marketing tasks in ServiceNow_UC 3</li>
            <li>Writing new hire data to ServiceNow_UAV4</li>
          </ol>
          <br></br>
          <b>SOAP User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Retrieving data using SOAP_UC 1</li>
            <li>Accessing SOAP Service using REST Service_UC 2</li>
          </ol>
          <br></br>
          <b>SQL Server User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Reading Data From SQL Server UseCase1</li>
            <li>Writing Data to SQL Server UseCase2</li>
            <li>Migrating Data Using Parallel Run UseCase3</li>
            <li>Generating Avro Schema UseCase4</li>
          </ol>
          <br></br>
          <b>Workday User Assistance Videos</b>
          <br></br>
          <ol>
            <li>Extracting Workday data and uploading it to NetSuite_UC 1</li>
            <li>Exporting Workday reports as a Service_UC 2</li>
            <li>Exporting new hire data from Workday_UC 3</li>
            <li>Writing user data to Workday_UC 4</li>
          </ol>
          <br></br>
          <b>Ultra Tasks</b>
          <br></br>
          <ol>
            <li>Creating Ultra Pipelines</li>
            <li>Creating and Managing Ultra Tasks</li>
            <li>Demonstration_Writing Data to SQL using Ultra Tasks</li>
            <li>Demonstration_Retrieving Data from a REST Service using Ultra Tasks</li>
            <li>Demonstration_Polling Files using Ultra Tasks</li>
            <li>Hands On Exercise-1</li>
            <li>Hands On Exercise-2</li>
          </ol>
          <br></br>
          <b>SnapLogic - Continuous Integration and Continuous Delivery (Migration)</b>
          <br></br>
          <ol>
            <li>CICD-SnapLogic-Projects Promotion</li>
          </ol>
          <br></br>
          <b>SnapLogic Certified Enterprise Automation Professional Exam</b>
          <br></br>
          <ol>
            <li>SnapLogic Certified Enterprise Automation Professional Exam - Level I</li>
            <li>SnapLogic Certified Enterprise Automation Professional Exam - Level II</li>
            <li>SnapLogic Certified Enterprise Automation Professional Exam - Level III</li>
          </ol>
        </>
    },
    {
        title: "SnapLogic Accreditation",
        illustration: images.Course_Certification,
        description: "SnapLogic Accreditation is designed for those who want to enhance their expertise on all core SnapLogic concepts for various integration needs across industries and lines of business.",
        about: <>
          The SnapLogic Integrator Training teaches all of the concepts and tasks involved in using the SnapLogic Enterprise Integration Cloud to integrate various end-points. It also teaches how to manage and monitor your SnapLogic instance.
          <br></br>
          <br></br>
          It also contains hands-on exercises for practice. So, ensure that you have access to your SnapLogic Enterprise Integration Platform instance. 
          <br></br>
          <br></br>
          If you do not have access to the SnapLogic Integration Platform, please contact your SnapLogic Administrator or SnapLogic Account Manager.
          <br></br>
          <br></br>
          This course should take ~8 hours to complete.
          <br></br>
          <br></br>
          Note: The login credentials for SnapLogic University are different from the SnapLogic Instance credentials.
          <br></br>
          <br></br>
          Upon completion of these modules, you are required to take the SnapLogic Accreditation test.
          <br></br>
          <br></br>
          The SnapLogic Accreditation test comprises 25 multiple-choice questions. You must score at least 60 percent to pass the test.
          <br></br>
          <br></br>
          By signing up for this accreditation and training, you agree for us to send your name and email address to our third-party accreditation partners.
          <br></br>
          <br></br>
          Get started and become SnapLogic-accredited today!
        </>,        
        curriculum: <>
          <b>SnapLogic Integrator Training</b>
          <br></br>
          <ol>
            <li>Introduction to SnapLogic Enterprise Integration Cloud</li>
            <li>Platform Overview and Managing Assets</li>
            <li>Importing Projects</li>
            <li>Creating and Managing Pipelines</li>
            <li>Creating a Pipeline</li>
            <li>ReadingAssignment_CoreSnaps</li>
            <li>Creating a Pipeline</li>
            <li>Using Expression Language</li>
            <li>Using Expression Language</li>
            <li>ReadingAssignment_Expression Language</li>
            <li>Using Expression Language</li>
            <li>Creating and Managing Tasks</li>
            <li>Creating Tasks</li>
            <li>Managing and Monitoring Assets</li>
            <li>Modularizing and Reusing Pipelines</li>
            <li>Using the Pipeline Execute Snap</li>
            <li>HandsOn_Reusing Pipelines</li>
            <li>Extracting Data from Workday and Writing it to NetSuite</li>
            <li>Migrating Account Records from Salesforce to NetSuite</li>
            <li>Migrating Customer Records from Redshift to NetSuite</li>
            <li>Sending Twitter Reports via Email</li>
            <li>SnapLogic Integrator Accreditation—Assessment</li>
          </ol>
        </>
    }
];



const LaunchEvent = {
  eventTitle: "Launch Event - The Platform Academy",
  eventType: "Launch Event",
  eventDate: "6th May 2023 | 09:00 AM IST",
  eventLocation: "Hyderabad | Delhi | Bangalore | Chennai | Pune | Mumbai",
  eventImage: images.EventRegistration,
  eventDescription: <>
    Welcome to the Launch event of "The Platform Academy"! Join us for an exciting day filled with valuable insights, informative discussions, and networking opportunities. This event is designed for IT professionals, business leaders, and anyone interested in the latest trends and innovations in the world of technology.
    <br></br>
    <br></br>
    The event will kick off with a keynote address from a prominent industry leader, followed by a speech about the twin disruption of AI and No-Code, and how it's changing the game for businesses worldwide. The keynote will be followed by a panel discussion on ETL and Data Integration, where industry leaders will share their experiences, best practices, and lessons learned in this space.
    <br></br>
    <br></br>
    We will also be giving an overview of the SnapLogic Academy India, which offers world-class training and certification programs. This Launch event will take place across six IT hubs in India, including Mumbai, Bangalore, Hyderabad, Chennai, Delhi, and Pune. We welcome you to join us at the venue nearest to you and take advantage of this unique opportunity to connect with like-minded professionals and gain insights into the latest technologies and trends shaping our industry.
  </>,
  eventItinerary: [
    {
      time: <b>11:00 AM</b>,
      details: <>
        <b>Keynote</b>
        <br></br>
        Software Engineer Jobs in AI dominant IT sectors
      </>
    },
    {
      time: <b>11:45 AM</b>,
      details: <>
        <b>The Looking Glass Of The Coming Decade</b>
        <br></br>
        Twin Disruption of A.I and No-Code
      </>
    },
    {
      time: <b>12:30 PM</b>,
      details: <>
        <b>Lunch</b>
      </>
    },
    {
      time: <b>01:45 PM</b>,
      details: <>
        <b>Introduction Followed By Panel Discussion</b>
        <br></br>
        SnapLogic Overview
        <br></br>
        Panel Discussion on ETL & Data Integration
      </>
    },
    {
      time: <b>02:45 PM</b>,
      details: <>
        <b>Academy Offering</b>
        <br></br>
        SnapLogic Academy India - Course Offering & Registrations
      </>
    },
    {
      time: <b>04:00 PM</b>,
      details: <>
        <b>Conclude</b>
      </>
    }
  ],
  eventVenue: [
    {
      city: "Mumbai",
      address: "Hyatt Centric Juhu"
    },
    {
      city: "Bangalore",
      address: "Hyatt Centric MG Road Bangalore"
    },
    {
      city: "Chennai",
      address: "Novotel Chennai Chamiers Road Hotel"
    },
    {
      city: "Hyderabad",
      address: "Hyatt Place, Banjara Hills"
    },
    {
      city: "Delhi NCR",
      address: "Hyatt Place Gurgaon"
    },
    {
      city: "Pune",
      address: "Courtyard by Marriott Pune, Hinjewadi"
    }
  ]
};



export {
    Benefits,
    WhyIndia,
    Learning,
    FeatureList,
    CityList,
    TopCourses,
    AllCourses,
    AllCourseDetails,
    LaunchEvent
}