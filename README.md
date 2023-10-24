# **Cloud Resume Challenge: Your Resume in Azure**

Welcome to my solution for the Cloud Resume Challenge (Azure Flavor)! This project aims to showcase a resume in Azure using a combination of front-end and back-end resources, with an integrated visitor counter powered by Azure Functions.

## **Live Demo**
Experience the solution in action. [View the live demo here](https://www.ericisberg.cloud/).

## **Architecture Diagram**
To get an overview of how everything comes together, see the [diagram here](#).

## **Prerequisites**
Before you dive into the code, ensure you have the following tools and accounts set up:

- GitHub account
- Azure account
- Azure CLI
- .NET 6 LTS
- Azure Functions Core Tools
- Visual Studio Code

### **Visual Code Extensions**
- Azure Functions Extensions
- C# Extension
- Azure Storage Extension

## **Front-end Resources**
The front-end of this project is crafted using a static site paradigm with HTML, CSS, and JavaScript. One of its unique features is a dynamic visitor counter, which fetches data through an API call to an Azure Function.

- **Design Inspiration**: While I might not be a professional designer, I utilized [this template](https://styleshout.com/free-templates/ceevee/) to create an appealing interface.
- **JavaScript Insight**: I'm more of a backend person, but [this article](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) provided a clear understanding of how to integrate an API call using JavaScript.
- **Azure Storage Explorer**: A crucial tool when working with Storage Accounts.
- **Deployment Guide**: Deploying a static site to blob storage is straightforward. [Here's how I did it](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host).

## **Back-end Resources**
The backbone of this project is an HTTP-triggered Azure Function integrated with Cosmos DB. When the function gets triggered, it fetches data from CosmosDB, increments the counter, saves the updated data, and then sends the updated value back to the caller.

- **Cosmos DB Setup**: Set up a Cosmos DB account either through the [Azure command line](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/manage-with-cli) or the [Azure portal](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/quickstart-portal).
- **Azure Function Creation**: [Here's a guide](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=node-v3%2Cpython-v2%2Cisolated-process&pivots=programming-language-csharp) to creating an HTTP-triggered Azure Function in Visual Studio Code.
- **Azure Functions with Cosmos DB**: Delve into the intricacies of integrating Azure Functions with Cosmos DB through these resources:
  - [Azure Functions Cosmos DB bindings](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2?tabs=isolated-process%2Cextensionv4&pivots=programming-language-csharp)
  - [Fetching data from Cosmos DB](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-input?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv4&pivots=programming-language-csharp)
  - [Writing data to Cosmos DB](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-output?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cextensionv4&pivots=programming-language-csharp)
- **CORS Setup**: To ensure smooth communication between the website and the function, CORS needs to be enabled both [locally](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local) and on the [deployed Azure Function](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors).

## **Testing Resources**
Testing is a cornerstone of every robust application. Though my tests are basic, they play a vital role in ensuring the functionality of the project.

- **Introduction to xUnit.net**: [Get started with xUnit.net](https://xunit.net/docs/getting-started/netcore/cmdline) for testing.
- **xUnit with Azure Functions**: Learn [how to set up xUnit with Azure Functions](https://www.madebygps.com/how-to-use-xunit-with-azure-functions/).
- **Testing Azure Functions**: Deep dive into [testing methodologies for Azure Functions](https://learn.microsoft.com/en-us/samples/azure-samples/azure-functions-tests/azure-functions-tests/).

## **CI/CD Resources**
Continuous Integration and Continuous Deployment (CI/CD) streamline the development process, ensuring every commit is tested and ready for production.

- **Blob Storage with GitHub Actions**: Automate the deployment of a static site on blob storage using [GitHub actions](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions?tabs=userlevel).
- **Azure Function Deployment**: Effortlessly [deploy Azure Functions to Azure with GitHub Actions](https://github.com/marketplace/actions/azure-functions-action).
- **.NET Testing in GitHub Actions**: Incorporate .NET testing in your GitHub workflow. [Here's how](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-net).