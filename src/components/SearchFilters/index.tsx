import * as S from './styles';

import { AiOutlineSearch } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

export default function SearchFilters() {
  return (
    <S.Container>
      <S.ContainerItems>
        <S.ListItems>
          <S.SelectControl>
            <S.Select>
              <S.Option value="">Select Location</S.Option>
            </S.Select>
          </S.SelectControl>
         
          <S.SelectControl>
            <S.Select>
              <S.Option value="">Tour Type</S.Option>
            </S.Select>
          </S.SelectControl>

          <S.SelectControl>
            <S.Select>
              <S.Option value="">Select Month</S.Option>
            </S.Select>
          </S.SelectControl>

          <S.SelectControl>
            <S.Select>
              <S.Option value="">Members</S.Option>
            </S.Select>
          </S.SelectControl>


          <S.Icon><AiOutlineSearch /></S.Icon>
        </S.ListItems>
      </S.ContainerItems>
    </S.Container>
  );
}
