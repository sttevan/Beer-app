import { getBeerList, getBeerMetaData } from '../../api';
import { ApiParams, Beer, Metadata, SORT, TYPE } from '../../types';
import handle from '../../utils/error';

const fetchData = (setData: (data: Array<Beer>) => void, setLoading: (isLoading: boolean) => void,  params?: ApiParams) => {
  setLoading(true);
  (async () => {
    
    try {
      const response = await getBeerList(params);
      setData(response.data);

    } catch (error) {
      handle(error);
    } finally {
      setLoading(false);
    }
  })();
};

const fetchMetadata = (setData: (data: Metadata) => void, params?: ApiParams) => {
  (async () => {
    try {
      const response = await getBeerMetaData(params);
      setData(response.data);
    } catch (error) {
      handle(error);
    }
  })();
};



const createApiParams = (by_type: TYPE | null, by_name: string, sort: SORT, page: number): Partial<ApiParams> => {
  const partialParams: Partial<ApiParams> = {};

  if (by_type !== null) {
    partialParams.by_type = by_type;
  }

  partialParams.by_name = by_name;
  partialParams.sort = `name:${sort}`;
  partialParams.page = page;

  return partialParams;
};

export { fetchData, fetchMetadata, createApiParams };
