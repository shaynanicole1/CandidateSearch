import React, { useEffect, useState } from 'react';
import { GitHubUser } from '../types';

export default function SavedCandidates() {
  const [saved, setSaved] = useState<GitHubUser[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('candidates');
    setSaved(data ? JSON.parse(data) : []);
  }, []);

  if (saved.length === 0) {
    return <p className="text-center p-4">No candidates have been accepted.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {saved.map((user) => (
        <div key={user.login} className="border p-4 rounded shadow text-center">
          <img src={user.avatar_url} alt={user.login} className="mx-auto w-16 h-16 rounded-full" />
          <h3 className="font-bold">{user.name || user.login}</h3>
          <p>@{user.login}</p>
          <p>{user.location || 'N/A'}</p>
          <p>{user.email || 'N/A'}</p>
          <p>{user.company || 'N/A'}</p>
          <a href={user.html_url} target="_blank" className="text-blue-500 underline">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
}
