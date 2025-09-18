# Twitter Case - Twitter API Consumer

A Node.js application that consumes the Twitter API to search for tweets by hashtags and optionally save them to a MySQL database.

## Features

- **Search tweets by hashtags**: Interactive command-line interface to search for tweets by any hashtag
- **Batch processing**: Save multiple predefined hashtag searches to database
- **MySQL integration**: Store tweet data for later analysis
- **Docker support**: Containerized application for easy deployment
- **CI/CD**: Jenkins pipeline configuration included

## Prerequisites

- Node.js 10.16.0 or higher
- MySQL database (optional, for data persistence)
- Twitter Developer Account with API credentials

## Installation

### Local Installation

1. Clone the repository:
```bash
git clone https://github.com/Vitorspk/twitterCase.git
cd twitterCase
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
export CONSUMER_KEY=your_twitter_consumer_key
export CONSUMER_SECRET=your_twitter_consumer_secret
export ACCESS_TOKEN_KEY=your_twitter_access_token_key
export ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
```

### Docker Installation

Pull the pre-built image from Docker Hub:
```bash
docker pull vitorspk/twittercase
```

Or build your own image:
```bash
docker build --rm -f "Dockerfile" -t twittercase:1.0.0 .
```

## Configuration

### Twitter API Credentials

The application requires Twitter API credentials. Set the following environment variables:

- `CONSUMER_KEY`: Your Twitter API consumer key
- `CONSUMER_SECRET`: Your Twitter API consumer secret
- `ACCESS_TOKEN_KEY`: Your Twitter API access token key
- `ACCESS_TOKEN_SECRET`: Your Twitter API access token secret

### MySQL Database Setup

If you want to persist tweet data, create a MySQL database:

```sql
-- Create database
CREATE DATABASE twitter_case
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Create tweets table
USE twitter_case;

CREATE TABLE twittes (
    id_tag INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    contexto TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Usage

### Search for Specific Hashtag

Run the interactive search command:
```bash
npm run pesquisa
```

This will prompt you to enter a hashtag and display up to 100 recent tweets containing that hashtag.

### Save Predefined Hashtags to Database

Run the batch processing command:
```bash
npm run grava
```

This will search for the following predefined hashtags and save results to the database:
- #openbanking
- #apifirst
- #devops
- #cloudfirst
- #microservices
- #apigateway
- #oauth
- #swagger
- #raml
- #openapis

### Using Docker

To run the application in a container:

1. Start the container:
```bash
docker run -it \
  -e CONSUMER_KEY=your_key \
  -e CONSUMER_SECRET=your_secret \
  -e ACCESS_TOKEN_KEY=your_token_key \
  -e ACCESS_TOKEN_SECRET=your_token_secret \
  -e MYSQL_HOST=your_mysql_host \
  -e MYSQL_USER=your_mysql_user \
  -e MYSQL_DB=twitter_case \
  vitorspk/twittercase bash
```

2. Inside the container, run:
```bash
npm run pesquisa  # For interactive search
npm run grava     # For batch processing
```

## Project Structure

```
twitterCase/
├── config/
│   └── twitterConfig.js    # Twitter API configuration
├── gravaTagsNoDatabase.js  # Batch processing script
├── pesquisaDeterminadaTag.js # Interactive search script
├── package.json            # Node.js dependencies
├── Dockerfile             # Docker container configuration
├── Jenkinsfile           # Jenkins CI/CD pipeline
└── README.md            # Project documentation
```

## Dependencies

- **twitter**: Node.js client for Twitter API
- **mysql-json**: MySQL database connector with JSON support
- **inquirer**: Interactive command-line user interfaces
- **chalk**: Terminal string styling
- **chalk-pipe**: Create chalk style schemes with simpler style strings

## CI/CD

The project includes a Jenkins pipeline configuration (`Jenkinsfile`) for continuous integration. The pipeline uses the Node.js 10.16.0 Docker image for builds.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Known Issues

- The Twitter config file has a typo: `ACCESS_TOKEN_SECRET` environment variable should be `ACCESS_TOKEN_SECRET` (missing 'A' in the config)

## License

ISC License

## Author

Vitorspk

## Support

For issues and questions, please open an issue on [GitHub Issues](https://github.com/Vitorspk/twitterCase/issues)