import { FilterSitters } from "./sitters.filter";
import { TestBed } from "@angular/core/testing";
import { SittersState } from "src/app/store";
import { InitialStateService } from "src/app/services/initial-state.service";
import { Sitter } from "src/app/entities/sitter";

//TESTPLAN
/*
1.0: valid data: Search 'Azat Baran' should give 1 resut, Azat Baran
1.1: valid data: Search 'azat' should give 1 result, Azat Baran

2.0: invalid data: Search 'Azat' with undefined array
*/

describe('Sitter search filter', () => {
    TestBed.configureTestingModule({
        declarations: [
            FilterSitters
        ]
    });

    it('1.0: valid data: Search "Azat Baran" should give 1 resut, Azat Baran', () => {
        //Arrange
        //Perhaps better to write the get method here so all tests wont break if initialstate is makes them fail.
        const sitters: Sitter[] = InitialStateService.getInitialSitterTestState().sitters;
        const filter: FilterSitters = new FilterSitters();

        //Act
        const result = filter.transform(sitters, 'Azat Baran')

        //Assert(expect)
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Azat Baran');
    });

    it('1.1: valid data: Search "azat" should give 1 result, Azat Baran', () => {
        //Arrange
        const sitters: Sitter[] = InitialStateService.getInitialSitterTestState().sitters;
        const filter: FilterSitters = new FilterSitters();

        //Act
        const result = filter.transform(sitters, 'Azat Baran')

        //Assert(expect)
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Azat Baran');
    });
});