
import Peer from 'peerjs';

function is_data_connection(conn: Peer.MediaConnection | Peer.DataConnection): conn is Peer.DataConnection {
  return (conn as Peer.DataConnection).send !== undefined;
}

export { is_data_connection };
