
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

## Authentication Endpoints
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/profile` - Get current admin profile
- `PUT /api/auth/profile` - Update admin profile

## Video Management

### Videos
- `GET /api/videos` - List all videos with pagination and search
- `POST /api/videos` - Create a new video
- `GET /api/videos/:id` - Get video details
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video
- `PUT /api/videos/:id/status` - Enable/disable video

### Video Content Types
- `GET /api/videos/series` - List series content
- `GET /api/videos/documentaries` - List documentaries
- `GET /api/videos/standalone` - List standalone videos
- `GET /api/videos/shorts` - List short videos

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

## Cloud Storage Integration

### OneDrive Integration
- `POST /api/integrations/onedrive/connect` - Connect OneDrive account
- `GET /api/integrations/onedrive/files` - List OneDrive files
- `POST /api/integrations/onedrive/import` - Import files from OneDrive

### Google Drive Integration
- `POST /api/integrations/googledrive/connect` - Connect Google Drive
- `GET /api/integrations/googledrive/files` - List Google Drive files
- `POST /api/integrations/googledrive/import` - Import files from Google Drive

### Firebase Storage
- `POST /api/storage/firebase/upload` - Upload to Firebase Storage
- `GET /api/storage/firebase/files` - List Firebase files
- `DELETE /api/storage/firebase/:id` - Delete from Firebase

## Blog Management
- `GET /api/blog/posts` - List all blog posts
- `POST /api/blog/posts` - Create new blog post
- `GET /api/blog/posts/:id` - Get blog post details
- `PUT /api/blog/posts/:id` - Update blog post
- `DELETE /api/blog/posts/:id` - Delete blog post
- `PUT /api/blog/posts/:id/status` - Publish/unpublish post

## Draws Management
- `GET /api/draws` - List all draws
- `POST /api/draws` - Create new draw
- `GET /api/draws/:id` - Get draw details
- `PUT /api/draws/:id` - Update draw
- `DELETE /api/draws/:id` - Delete draw
- `GET /api/draws/:id/participants` - List draw participants
- `POST /api/draws/:id/select-winner` - Select draw winner

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

## Frontend Integration Endpoints

### Video Streaming URLs
- `GET /api/frontend/videos/:id/stream` - Get streaming URL for video
- `GET /api/frontend/videos/:id/poster` - Get poster image URL
- `GET /api/frontend/categories` - Get categories for frontend
- `GET /api/frontend/artists` - Get artists for frontend

### Content Organization
- `GET /api/frontend/series` - List all series for frontend
- `GET /api/frontend/documentaries` - List documentaries for frontend
- `GET /api/frontend/shorts` - List short videos for frontend
- `GET /api/frontend/featured` - Get featured content

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
  streamingUrl: string
  contentType: 'series' | 'documentary' | 'standalone' | 'short'
  status: 'active' | 'inactive'
  featured: boolean
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
  cloudProvider: 'local' | 'onedrive' | 'googledrive' | 'firebase'
  cloudPath?: string
  uploadedAt: string
}
```

### Blog Post Model
```typescript
interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  category: string
  status: 'draft' | 'published'
  featuredImage?: string
  views: number
  createdAt: string
  updatedAt: string
}
```

### Draw Model
```typescript
interface Draw {
  id: string
  title: string
  description?: string
  prize: string
  startDate: string
  endDate: string
  maxParticipants?: number
  eligibilityCriteria: string
  status: 'scheduled' | 'active' | 'completed'
  participants: string[]
  winner?: string
  createdAt: string
}
```

### Admin Profile Model
```typescript
interface AdminProfile {
  id: string
  name: string
  email: string
  role: string
  joinDate: string
  totalTimeSpent: string
  videosUploaded: number
  usersManaged: number
  lastLogin: string
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

### Cloud Storage Upload
```
POST /api/uploads/cloud
Content-Type: multipart/form-data

file: File
provider: 'onedrive' | 'googledrive' | 'firebase'
```

## Search and Filtering

### Query Parameters
- `search` - Search term
- `category` - Filter by category
- `status` - Filter by status
- `contentType` - Filter by content type
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sort` - Sort field
- `order` - Sort order (asc/desc)

Example:
```
GET /api/videos?search=naija&category=gameweek&contentType=series&page=1&limit=10
```

## Webhook Endpoints (for external integrations)

### Cloud Storage Webhooks
- `POST /api/webhooks/onedrive` - OneDrive file change notifications
- `POST /api/webhooks/googledrive` - Google Drive change notifications
- `POST /api/webhooks/firebase` - Firebase storage events

### Frontend Integration Webhooks
- `POST /api/webhooks/frontend/view` - Video view tracking
- `POST /api/webhooks/frontend/engagement` - User engagement tracking
