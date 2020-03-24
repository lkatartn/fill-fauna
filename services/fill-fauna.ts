import { Client, query as q } from "faunadb";

export function fillCollection(
  token: string,
  collectionName: string,
  data: {}[]
) {
  const client = new Client({ secret: token });
  (window as any).c = client;
  (window as any).q = q;
  client
    .query(
      q.Map(
        data,
        q.Lambda(
          "data",
          q.Create(q.Collection(collectionName), { data: q.Var("data") })
        )
      )
    )
    .then(console.log.bind(console));
}
export function retrieveCollections(token: string) {
  const client = new Client({ secret: token });
  return client
    .query(q.Paginate(q.Collections(), { size: 100 }))
    .then(result => result as { data: { id: string }[] });
}
