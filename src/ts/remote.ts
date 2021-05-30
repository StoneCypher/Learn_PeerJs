
import Peer                   from 'peerjs';

import { RemoteConfig }       from './types';
import { is_data_connection } from './util';




const handle = `xyzzy-${new Date().getTime()}`;
console.log('Our handle: ' + handle);

const label_connection = (name1: string, name2: string): string =>
  `${name1}__!!__${name2}`;





class Remote {

  private _conn        : Peer;
  private _my_name     : string;

  constructor({ my_name, on_ns_recv, on_ns_conn }: RemoteConfig) {
    this._my_name     = my_name;
    this._conn        = new Peer(this._my_name);

    if (on_ns_conn) { this._conn.on('open', on_ns_conn); }
    if (on_ns_recv) { this._conn.on('data', on_ns_recv); }
  }

  connect_to(name: string) {
    this._conn.connect(name, {label: label_connection(this._my_name, name)});
  }

  connection_for(name: string) {
    return this._conn.getConnection(name, label_connection(this._my_name, name));
  }

  chat(name: string, text: string) {
    const maybe_conn = this.connection_for(name);
    if (maybe_conn !== null) {
      if (is_data_connection(maybe_conn)) {
        maybe_conn.send(text);
      }
    }
  }

};





export { Remote };
