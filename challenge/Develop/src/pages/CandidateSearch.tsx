import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; // Import your API function to fetch candidate data

const CandidateSearch = () => {
    const [candidate, setCandidate] = useState<any>(null); // Replace 'any' with a specific type if you define one
    const [savedCandidates, setSavedCandidates] = useState<any[]>([]); // Array to hold saved candidates

    // Fetch a candidate when the component mounts
    useEffect(() => {
        const fetchCandidate = async () => {
            const data = await searchGithub(); // Call your API function to fetch candidate
            setCandidate(data); // Update the candidate state with the fetched data
        };
        fetchCandidate();
    }, []);

    // Save the current candidate to local storage
    const saveCandidate = () => {
        if (candidate) {
            const updatedList = [...savedCandidates, candidate];
            setSavedCandidates(updatedList);
            localStorage.setItem('savedCandidates', JSON.stringify(updatedList)); // Save to local storage
        }
        fetchNextCandidate(); // Fetch the next candidate after saving
    };

    // Fetch the next candidate
    const fetchNextCandidate = async () => {
        const data = await searchGithub(); // Fetch the next candidate
        setCandidate(data);
    };

    return (
        <div>
            {candidate ? (
                <div>
                    <h2>{candidate.name}</h2>
                    <p>Username: {candidate.login}</p>
                    <p>Location: {candidate.location}</p>
                    <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
                    <p>Email: {candidate.email || 'N/A'}</p> {/* Email might be undefined */}
                    <p>Company: {candidate.company || 'N/A'}</p> {/* Company might be undefined */}
                    <p>Profile: <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.html_url}</a></p>
                    <button onClick={saveCandidate}>+</button>
                    <button onClick={fetchNextCandidate}>-</button>
                </div>
            ) : (
                <p>No more candidates available.</p>
            )}
        </div>
    );
};

export default CandidateSearch;
