import React, { useEffect, useState } from 'react';
import { fetchGitHubUser } from '../api/API';
import CandidateCard from './CandidateCard';
import { GitHubUser } from '../types';

const usernames = ['torvalds', 'gaearon', 'yyx990803', 'sindresorhus', 'addyosmani'];

export default function CandidateSearch() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [message, setMessage] = useState('');

  const loadUser = async () => {
    if (index >= usernames.length) {
      setUser(null);
      setMessage('No more candidates available.');
      return;
    }
    try {
      const data = await fetchGitHubUser(usernames[index]);
      setUser(data);
    } catch {
      setUser(null);
      setMessage('Failed to load candidate.');
    }
  };

  useEffect(() => {
    loadUser();
  }, [index]);

  const handleAccept = () => {
    const stored = localStorage.getItem('candidates');
    const current = stored ? JSON.parse(stored) : [];
    if (user) {
      localStorage.setItem('candidates', JSON.stringify([...current, user]));
    }
    setIndex(index + 1);
  };

  const handleReject = () => {
    setIndex(index + 1);
  };

  if (!user) return <p className="text-center p-4">{message}</p>;

  return <CandidateCard user={user} onAccept={handleAccept} onReject={handleReject} />;
}
