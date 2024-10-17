import { useEffect, useState } from 'react';

const SavedCandidates = () => {
    const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

    useEffect(() => {
        const storedCandidates = localStorage.getItem('savedCandidates');
        if (storedCandidates) {
            setSavedCandidates(JSON.parse(storedCandidates));
        }
    }, []);

    const removeCandidate = (index: number) => {
        const updatedList = savedCandidates.filter((_, i) => i !== index);
        setSavedCandidates(updatedList);
        localStorage.setItem('savedCandidates', JSON.stringify(updatedList)); 
    };

    return (
        <div>
            <h1>Potential Candidates</h1>
            {savedCandidates.length === 0 ? (
                <p>No candidates have been accepted.</p>
            ) : (
                <ul>
                    {savedCandidates.map((candidate, index) => (
                        <li key={index}>
                            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
                            <p>{candidate.name} - {candidate.login}</p>
                            <p>Location: {candidate.location}</p>
                            <button onClick={() => removeCandidate(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SavedCandidates;
