// ProjectDetails.tsx
import React, { useState } from 'react';
import type { Project } from './types';
import { getEmbedUrl } from './utils';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [selectedLength, setSelectedLength] = useState<'short' | 'medium' | 'long'>('short');

  const renderVideo = (videoUrl: string, index: number) => {
    const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
    
    if (isYouTube) {
      return (
        <iframe
          key={index}
          width="100%"
          height="250"
          src={getEmbedUrl(videoUrl)}
          title={`Project Demo ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      );
    }
    
    return (
      <video
        key={index}
        width="100%"
        height="250"
        controls
        className="rounded-lg"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf': return '📄';
      case 'link': return '🔗';
      case 'doc': return '📝';
      default: return '📎';
    }
  };

  const getFileIconColor = (fileType: string) => {
    switch (fileType) {
      case 'pdf': return 'text-red-500';
      case 'link': return 'text-blue-500';
      case 'doc': return 'text-blue-600';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="max-w-full">
      {/* Header Section */}
      <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center text-3xl">
          {project.logo}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
        </div>
      </div>

      {/* Videos Section */}
      {project.media?.videos && project.media.videos.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">🎥 Demo Videos</h3>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className={`grid gap-4 ${project.media.videos.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
              {project.media.videos.map(renderVideo)}
            </div>
          </div>
        </div>
      )}

      {/* Files Section */}
      {project.media?.files && project.media.files.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📁 Related Files</h3>
          <div className="space-y-2">
            {project.media.files.map((file, index) => (
              <a
                key={index}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-lg transition-all duration-200"
              >
                <div className="flex-shrink-0">
                  <span className={getFileIconColor(file.type)}>
                    {getFileIcon(file.type)}
                  </span>
                </div>
                <div className="flex-grow">
                  <span className="font-medium text-gray-800">{file.name}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({file.type.toUpperCase()})
                  </span>
                </div>
                <div className="flex-shrink-0 text-gray-400">→</div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Description Section */}
      <div className="mb-6">
        <div className="flex space-x-2 mb-4">
          {(['short', 'medium', 'long'] as const).map((length) => (
            <button
              key={length}
              onClick={() => setSelectedLength(length)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedLength === length
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {length.charAt(0).toUpperCase() + length.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4 min-h-[120px]">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {project.descriptions[selectedLength]}
          </p>
        </div>
      </div>

      {/* Learning Section */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What I Learned</h3>
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <p className="text-gray-700 leading-relaxed">
            {project.learned}
          </p>
        </div>
      </div>
    </div>
  );
};