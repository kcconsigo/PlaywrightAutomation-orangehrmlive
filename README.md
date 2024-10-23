**My Playwright End to End Automation Test Framework**

**Project Name:** demo.orangehrmlive-Playwright Project End to End test built in Page Object Model


This automation framework adds **Admin** and **Employee**, Edit Employee's Information and Delete the Employee's Information
![Dashboard](https://github.com/user-attachments/assets/a9c494c4-1396-4f6f-9878-ce933a0839a5)
![LoginPage](https://github.com/user-attachments/assets/a5419d6b-53d7-4ac3-a52e-3d893ac8a1a8)



Technology Stacks used: VS Code for IDE 

Javascript for programming language and Gherkin Syntax for BDD approach

GitHub as for code repository(also planning to add to bitbucket)

I've also added my project to my Bitbucket repository : https://bitbucket.org/testautomationframework1/orangehrmlive_testautomation/src/main/

CI - GitHub actions via yaml 

CICD - Jenkins, CircleCI 

Reporting - Test Runner via cucumber and Allure Report 
-- Command script for Installing Scoop Allure report in Windows Powershell -- 
![image](https://github.com/user-attachments/assets/efb8b3fb-b668-4947-a9ae-dee9677474f6)
**NOTE** : If you encounter an error in installing scoop allure: 

scoop : The term 'scoop' is not recognized as the name of a cmdlet, function, script file, or operable program. Check
the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ scoop install allure
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (scoop:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException



--use this command below: -- 

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression


Monitoring and Logs - Grafana Dashbaord

Docker Containerization for the orchestration.

**Clone Project** : **https://github.com/kcconsigo/PlaywrightAutomation-orangehrmlive.git**

Setup and Installation:
* ![image](https://github.com/user-attachments/assets/701e07ad-ca3d-45d8-a08c-485c83fc4665)
* ![image](https://github.com/user-attachments/assets/dee6e874-dc7f-4c87-b4f1-1f222bad7469)
* ![image](https://github.com/user-attachments/assets/3a7f4103-75f6-4c57-ae2c-5c3dbdafb01e)
* ![image](https://github.com/user-attachments/assets/14ec7af1-1eee-42e2-b81c-9379f4fa1578)
Also you can use if you want to run your application via web browser
![image](https://github.com/user-attachments/assets/8dcf015f-7762-4239-8554-e966cca297da)
* ![image](https://github.com/user-attachments/assets/17462e49-73f7-44cd-8547-79082cfd9acb)
* ![image](https://github.com/user-attachments/assets/4d4310c1-ed6c-43f8-909b-df2b5eab18e2)
  
Executing in Multiple Test Environment: 
DEV and QA

1. First Create .env file

![image](https://github.com/user-attachments/assets/e2e8651c-0d80-47e2-8561-52b79368a504)
![image](https://github.com/user-attachments/assets/3961e4a6-77d4-4569-882f-19b765356fdc)
![image](https://github.com/user-attachments/assets/01254c39-bc3f-4910-be4f-fbb3e964fce4)


2. Install donenv package in powershell terminal
![image](https://github.com/user-attachments/assets/b345ec1f-8834-458f-84f5-d52097aa4995)
once the installation succefully, the packe will be added to package.json
![image](https://github.com/user-attachments/assets/22926977-aa81-45b2-b8b0-00302623e6a7)

3. Create Envi setup js file
![image](https://github.com/user-attachments/assets/483d4d0c-23ef-41d5-8628-aca6acb8ad37)
![image](https://github.com/user-attachments/assets/0a437818-ea14-4311-be05-6254c03f2c5b)


4. Specify globalSetup to your playwright.config.js
![image](https://github.com/user-attachments/assets/57001e64-d760-4dc5-86d8-6461713a4f2c)

5. We can now use our process.env in spec.js file
![image](https://github.com/user-attachments/assets/7cf6ef57-8267-4653-9290-6095fed31919)


6. And then lastly execution
![image](https://github.com/user-attachments/assets/dc4cfea5-3469-48cd-b552-19f94a6c1788)

NOTE: for MacOS we should use this command : 
export ENV="dev"
export ENV="qa"

7 Then run this command to your terminal (I am using headed mode)
npx playwright test LogInPage.spec --headed






 








