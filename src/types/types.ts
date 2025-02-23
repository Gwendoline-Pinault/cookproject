/**
 * Type for Rapid Api request options
 */
export type RapidApiOptions = {
  method: string,
  url: string,
  params: {
    from: string,
    size: string,
  },
  headers: {
    'x-rapidapi-key': string,
    'x-rapidapi-host': string,
  },
}

/**
 * Response Api type
 */
export type RapidApiResponse = {
  id: number,
  name: string,
  slug: string,
  description: string,
  thumbnail_url: string,
  cook_time_minutes: number,
  total_time_minutes: number,
  user_ratings: {score: number},
  instructions : [
    {
      display_text: string,
      position: number,
    }
  ],
  sections: [
    {
      components : [
        {
          raw_text: string,
        }
      ]
    }
  ]
}
