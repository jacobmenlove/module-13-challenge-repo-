import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; 

const CandidateSearch = () => {
    const [candidate, setCandidate] = useState<any>(null); 

    const [savedCandidates, setSavedCandidates] = useState<any[]>([]); 

    useEffect(() => {
        const fetchCandidate = async () => {
            const data = await searchGithub(); 
            setCandidate(data); 
        };
        fetchCandidate();
    }, []);

    const saveCandidate = () => {
        if (candidate) {
            const updatedList = [...savedCandidates, candidate];
            setSavedCandidates(updatedList);
            localStorage.setItem('savedCandidates', JSON.stringify(updatedList)); 
        }
        fetchNextCandidate(); 
    };

    const fetchNextCandidate = async () => {
        const data = await searchGithub(); 
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
