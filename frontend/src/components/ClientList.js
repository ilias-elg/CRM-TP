function ClientList({ clients, onChangerStatut, onSupprimer }) {
    if (clients.length === 0) {
        return <p className="vide">Aucun client à afficher.</p>;
    }

    return (
        <div className="tableau">
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Entreprise</th>
                    <th>Statut</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client._id}>
                        <td className="nom">{client.nom}</td>
                        <td>{client.email}</td>
                        <td>{client.entreprise}</td>
                        <td>
                            <select
                                className={"statut statut-" + client.statut}
                                value={client.statut}
                                onChange={(event) =>
                                    onChangerStatut(client._id, event.target.value)
                                }
                            >
                                <option value="prospect">Prospect</option>
                                <option value="client">Client</option>
                                <option value="inactif">Inactif</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn-supprimer" onClick={() => onSupprimer(client._id)}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default ClientList;
