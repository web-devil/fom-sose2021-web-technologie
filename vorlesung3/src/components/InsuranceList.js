export default function InsuranceList() {
    const insurances = [
        { name: 'Allianz' },
        { name: 'Ergo' },
        { name: 'DKV Direkt' },
        { name: 'Hallesche' },
        { name: 'Hanse Merkur' },
        { name: 'Ottonova' },
    ];

    console.log('Insurance list rendering');

    return (
        <ul>
            {insurances.map((insurance) => {
                return (
                    <li>
                        <h2>{insurance.name}</h2>
                    </li>
                );
            })}
        </ul>
    );
}
