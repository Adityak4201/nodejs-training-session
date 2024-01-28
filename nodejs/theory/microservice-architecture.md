# Microservice Architecture

Microservice architecture, or simply microservices, is a distinctive method of developing software systems that has grown in popularity in recent years. In a microservices architecture, an application is built as a collection of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API. These services are built around business capabilities and independently deployable by fully automated deployment machinery.

## Key Characteristics of Microservices:

1. **Single Responsibility**: Each microservice follows the single responsibility principle. It means each service should have a specific job. If a service does more than one task, it should be split into two services.

2. **Independently Deployable**: Microservices can be deployed independently. A team can update an existing service without rebuilding and deploying the entire application.

3. **Decentralized**: Microservices are decentralized, which means that services can be developed and deployed independently of one another.

4. **Fault Isolation**: A process failure should not bring the whole system down. Microservice architectures are designed to cope with failure.

5. **Technology Diversity**: With microservices, you can mix multiple languages, development frameworks and data-storage technologies.

Read More: [Monolith vs Microservices Architecture](https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith)
