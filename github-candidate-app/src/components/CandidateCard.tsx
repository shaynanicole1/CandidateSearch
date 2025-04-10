import React from 'react';
import { GitHubUser } from '../types';

interface Props {
  user: GitHubUser;
  onAccept: () => void;
  onReject: () => void;
}

export default function CandidateCard({ user, onAccept, onReject }: Props) {
  return (
    <div className="border p-4 rounded shadow max-w-lg mx-auto space-y-3 text-center">
      <img src={user.avatar_url} alt={user.login} className="mx-auto w-24 h-24 rounded-full" />
      <h2 className="text-xl font-bold">{user.name || user.login}</h2>
      <p>@{user.login}</p>
      <p>{user.location || 'No location'}</p>
      <p>{user.email || 'No email'}</p>
      <p>{user.company || 'No company listed'}</p>
      <a href={user.html_url} target="_blank" className="text-blue-600 underline block">GitHub Profile</a>
      <div className="flex justify-center space-x-4 mt-4">
        <button onClick={onReject} className="text-red-600 text-xl">−</button>
        <button onClick={onAccept} className="text-green-600 text-xl">+</button>
      </div>
    </div>
  );
}
