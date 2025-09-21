# People Management System - Angular Frontend

A modern Angular application for people management, integrated with the .NET Core REST API backend.

## 🚀 Features

- **People Visualization**: Table with pagination (10 records per page)
- **Advanced Filters**: 
  - Filter by Name (highlighted)
  - Filter by CPF
  - Filter by Gender
  - Filter by State
- **Data Update**: Refresh button to reload data from API
- **Modern Interface**: Responsive design with Angular Material
- **Pagination**: Navigation between pages with size control

## 🛠️ Technologies Used

- **Angular 20** - Main framework
- **Angular Material** - UI components
- **RxJS** - Reactive programming
- **TypeScript** - Programming language
- **SCSS** - Styling

## 📋 Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- .NET Core backend running on `https://localhost:5000`
- Backend project: https://github.com/oismaelash/people-net-core-backend

## 🚀 How to Run

### Option 1: Local Development

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Run the Backend
Make sure the .NET Core backend is running on `https://localhost:5000`

#### 3. Run the Application
```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200`

#### 4. Production Build
```bash
npm run build
```

### Option 2: Docker 🐳

#### Docker Prerequisites
- Docker installed on your system
- .NET Core backend running on `https://localhost:5000`

#### 1. Build Docker Image
```bash
docker build -t people-angular-app .
```

#### 2. Run Container
```bash
docker run -p 4200:4200 people-angular-app
```

The application will be available at `http://localhost:4200`

#### Useful Docker Commands
```bash
# Build with custom tag
docker build -t people-angular-app:latest .

# Run in detached mode (background)
docker run -d -p 4200:4200 --name people-app people-angular-app

# Stop container
docker stop people-app

# Remove container
docker rm people-app

# View container logs
docker logs people-app

# Access container shell
docker exec -it people-app sh
```

#### Docker Compose (Optional)
Create a `docker-compose.yml` file to facilitate management:
```yaml
version: '3.8'
services:
  people-frontend:
    build: .
    ports:
      - "4200:4200"
    container_name: people-angular-app
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── people-table/          # Main table component
│   ├── models/
│   │   └── person.model.ts        # TypeScript interfaces
│   ├── services/
│   │   └── people.service.ts      # Service for API communication
│   ├── app.config.ts              # Application configuration
│   ├── app.routes.ts              # Route configuration
│   └── app.ts                     # Root component

# Docker Files
├── Dockerfile                     # Multi-stage configuration for build and production
├── nginx.conf                     # Nginx configuration to serve the application
├── .dockerignore                  # Files ignored in Docker build
└── docker-compose.yml             # (Optional) Orchestration with Docker Compose
```

### Docker Files

- **Dockerfile**: Multi-stage configuration that:
  - Stage 1: Build Angular application with Node.js
  - Stage 2: Serve application with Nginx Alpine
- **nginx.conf**: Optimized Nginx configuration with:
  - Angular SPA routing support
  - Gzip compression
  - Static asset caching
  - Security headers
- **.dockerignore**: Excludes unnecessary files from build context

## 🔧 API Configuration

The API URL is configured in the `PeopleService`:
```typescript
private apiUrl = 'https://localhost:5000/api/people';
```

To change the API URL, edit the file `src/app/services/people.service.ts`.

## 📊 Table Features

### Pagination
- **Default size**: 10 records per page
- **Options**: 5, 10, 25, 50 records per page
- **Navigation**: First/last page buttons

### Filters
- **Name**: Highlighted field with visual emphasis
- **CPF**: Filter by CPF
- **Gender**: Filter by gender (Male/Female)
- **State**: Filter by state

### Actions
- **Apply Filters**: Applies selected filters
- **Clear Filters**: Removes all filters
- **Update Data**: Reloads data from API

## 🎨 Design

The application uses Angular Material with:
- **Theme**: Material Design
- **Responsiveness**: Adaptable to different screen sizes
- **Accessibility**: Accessible components
- **UX**: Intuitive and modern interface

## 🔍 API Endpoints

The application consumes the following endpoints:

- `GET /api/people` - Paginated list of people
- `GET /api/people/{cpf}` - Search person by CPF
- `POST /api/people` - Create new person
- `PUT /api/people/{cpf}` - Update person
- `DELETE /api/people/{cpf}` - Remove person

## 🐛 Troubleshooting

### CORS Error
If you encounter CORS errors, make sure the backend is configured to accept requests from the frontend.

### Connection Error
Check if the backend is running on `https://localhost:5000` and if the URL is correct in the service.

### Build Issues
Run `npm install` to reinstall dependencies.

### Docker Issues

#### Docker Build Error
```bash
# Clear Docker cache
docker system prune -a

# Rebuild image
docker build --no-cache -t people-angular-app .
```

#### Container Won't Start
```bash
# Check container logs
docker logs people-app

# Check if port 4200 is available
netstat -tulpn | grep :4200
```

#### Performance Issues
- Final image is optimized with Alpine Linux
- Assets are served with cache and compression
- For development, use `npm start` instead of Docker

#### Permission Error (Linux)
```bash
# Add user to docker group
sudo usermod -aG docker $USER
# Logout and login again
```

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
