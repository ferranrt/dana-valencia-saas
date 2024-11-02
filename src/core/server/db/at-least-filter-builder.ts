type Filter = {
  colummn: string;
  like: string;
};

type FilterSentence = string;

export class AtLeastFilterBuilder {
  private filters: Filter[];
  constructor() {
    this.filters = [];
  }
  addFilter(filter: Filter) {
    this.filters.push(filter);
    return this;
  }
  buildFilter(): FilterSentence {
    const sentences: FilterSentence[] = [];

    this.filters.forEach((filter) => {
      sentences.push(`${filter.colummn}.ilike.%${filter.like}%`);
    });

    return sentences.join(",");
  }
}
