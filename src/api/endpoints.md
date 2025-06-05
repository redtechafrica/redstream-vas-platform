
# REDSTREAM VAS API Endpoints

This document outlines the API endpoints that need to be implemented for the REDSTREAM VAS dashboard.

## Base URL
```
https://api.redstream.com/v1
```

## Authentication
All API requests should include an Authorization header:
```
Authorization: Bearer <token>
```

## Video Management

### Videos
- `GET /api/videos` - List all videos with pagination and search
- `POST /api/videos` - Create a new video
- `GET /api/videos/:id` - Get video details
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video

### Categories
- `GET /api/categories` - List all categories
- `POST /api/categories` - Create a new category
- `GET /api/categories/:id` - Get category details
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category
- `PUT /api/categories/:id/status` - Enable/disable category

### Artists
- `GET /api/artists` - List all artists
- `POST /api/artists` - Create a new artist
- `GET /api/artists/:id` - Get artist details
- `PUT /api/artists/:id` - Update artist
- `DELETE /api/artists/:id` - Delete artist

### File Uploads
- `POST /api/uploads` - Upload video files
- `GET /api/uploads` - List uploaded files
- `PUT /api/uploads/:id/rename` - Rename uploaded file
- `DELETE /api/uploads/:id` - Delete uploaded file

## Admin Management
- `GET /api/admins` - List all administrators
- `POST /api/admins` - Create new administrator
- `GET /api/admins/:id` - Get admin details
- `PUT /api/admins/:id` - Update admin
- `DELETE /api/admins/:id` - Delete admin

## VAS Module
- `GET /api/services` - List all services
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

- `GET /api/subscriptions` - List subscriptions
- `POST /api/subscriptions` - Create subscription
- `PUT /api/subscriptions/:id` - Update subscription

- `GET /api/transactions` - List transactions
- `GET /api/reports/daily` - Generate daily reports

## Data Models

### Video Model
```typescript
interface Video {
  id: string
  title: string
  description?: string
  poster?: string
  videoFile: string
  category: string
  artists: string[]
  mediaUrl: string
  status: 'active' | 'inactive'
  createdAt: string
  updatedAt: string
}
```

### Category Model
```typescript
interface Category {
  id: string
  name: string
  description?: string
  banner?: string
  status: 'active' | 'inactive'
  videoCount: number
  createdAt: string
}
```

### Artist Model
```typescript
interface Artist {
  id: string
  name: string
  description?: string
  avatar?: string
  videoCount: number
  createdAt: string
}
```

### Upload Model
```typescript
interface Upload {
  id: string
  title: string
  filename: string
  fileType: string
  fileSize: number
  linkedPosts: number
  uploadedAt: string
}
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

### Paginated Response
```json
{
  "success": true,
  "data": {
    "items": [],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}
```

## File Upload

### Upload Video Files
```
POST /api/uploads
Content-Type: multipart/form-data

files: File[] (max 5 files, 1.5GB each)
```

### Upload Images (Posters/Avatars/Banners)
```
POST /api/uploads/images
Content-Type: multipart/form-data

file: File (jpg, png, jpeg)
```

## Search and Filtering

### Query Parameters
- `search` - Search term
- `category` - Filter by category
- `status` - Filter by status
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sort` - Sort field
- `order` - Sort order (asc/desc)

Example:
```
GET /api/videos?search=naija&category=gameweek&page=1&limit=10
```
