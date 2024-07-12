import { Course } from "../src/course";

describe('Course', () => {

    let course;

    beforeEach(() => {
        course = new Course("macrame");
    });

    it('identifies short courses', () => {
        course.start();
        course.end();
        expect(course.isShort()).toBeTruthy();
    });

    it('identifies long courses', () => {
        
    });

    it('knows the course title', () => {
        
    });
});
