from abc import ABC
from pydantic import BaseModel
from csv import DictReader
from typing import IO


class Model(BaseModel, ABC):

    @classmethod
    def models_from_csv(cls, filelike: IO[str]):
        """
        Yields out subclasses of `Model` from a CSV pointed at by
        `filelike`. One model is produced per row of the CSV.
        """
        reader = DictReader(filelike)
        for row in reader:
            yield cls(**row)
