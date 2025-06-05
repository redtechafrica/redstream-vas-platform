
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export default function NewUploads() {
  const [files, setFiles] = useState<File[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = async () => {
    console.log("Uploading files:", files)
    // API endpoint: POST /api/uploads
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">New Uploads</h1>
        <p className="text-muted-foreground">Home > Dashboard > Manage Uploads > New Upload(s)</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-blue-300 bg-blue-50/30 rounded-lg p-8">
            <div className="text-center">
              <label className="cursor-pointer">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <Upload className="h-12 w-12 text-blue-500" />
                  <div>
                    <Button type="button" className="bg-blue-500 hover:bg-blue-600">
                      Attach files
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Max file size is 1.5GB and max number of files is 5.
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="video/*"
                />
              </label>
            </div>
          </div>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              <h3 className="font-medium">Selected Files:</h3>
              {files.map((file, index) => (
                <div key={index} className="text-sm text-muted-foreground">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              ))}
            </div>
          )}

          {files.length > 0 && (
            <div className="mt-6 flex justify-end">
              <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600">
                Upload Files
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
