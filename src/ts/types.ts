
type RemoteConfig = {
  my_name      : string,
  on_recv    ? : Function,
  on_conn    ? : Function,
  on_dc      ? : Function,
  on_ns_recv ? : () => void,
  on_ns_conn ? : () => void,
  on_ns_dc   ? : Function
};

export { RemoteConfig };
