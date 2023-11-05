import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skvJ2tAa3x43veljczNKv1DvCyDxVWd0DF5ntdsLvHbduROHsrBGTI8GYx9wphGMLqYAoJ6zNertEtZBPKrAxHeCCrmc3idtb71CfEXxmjQxqdvNfvFnCrQndbreaxPwva7guwnUltDTnxEYzqM3EtXsQ1wgvRV0DP8FvZPsCAT0P9gLpu5a",
})
