package demo.restcontroller;

import demo.solver.Solver;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SolverController {

    @PostMapping(value = "/get-expanded-form")
    public ResponseEntity<String> getExpandedFormF(@RequestBody Integer number) {

        return new ResponseEntity<>(Solver.getExpandedForm(number), HttpStatus.OK);
    }
}
